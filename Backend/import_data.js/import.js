const axios = require('axios');
const pool = require('../db/db');

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Combined area query for Pinellas + Hillsborough
const overpassQuery = `
[out:json][timeout:180];
area["name"="Pinellas County"]->.pinellas;
area["name"="Hillsborough County"]->.hills;
(
  node(area.pinellas)[amenity];
  node(area.pinellas)[shop];
  node(area.pinellas)[tourism];
  node(area.pinellas)[leisure];
  node(area.hills)[amenity];
  node(area.hills)[shop];
  node(area.hills)[tourism];
  node(area.hills)[leisure];
);
out body;
`;

function normalizeElement(el) {
  const lat = el.lat ?? (el.center && el.center.lat);
  const lon = el.lon ?? (el.center && el.center.lon);
  if (!lat || !lon) return null;

  const tags = el.tags || {};
  const name = tags.name || null;
  if (!name) return null; // skip unnamed places

  const name_en = tags['name:en'] || null;
  const addressParts = [tags['addr:housenumber'], tags['addr:street']].filter(Boolean);
  const address = addressParts.join(' ') || null;
  const city = tags['addr:city'] || null;
  const postcode = tags['addr:postcode'] || null;
  const type = tags.amenity || tags.shop || tags.tourism || tags.leisure || null;
  const description = tags.description || tags.note || null;

  return {
    osm_id: el.id,
    osm_type: el.type,
    name,
    name_en,
    address,
    city,
    postcode,
    type,
    tags,
    description,
    lon,
    lat
  };
}

async function createTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS places_full (
      id SERIAL PRIMARY KEY,
      osm_id BIGINT NOT NULL,
      osm_type TEXT NOT NULL,
      name TEXT,
      name_en TEXT,
      address TEXT,
      city TEXT,
      postcode TEXT,
      type TEXT,
      tags JSONB,
      description TEXT,
      location GEOGRAPHY(POINT, 4326),
      russian BOOLEAN DEFAULT FALSE,
      ukrainian BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now(),
      UNIQUE (osm_id, osm_type)
    );
  `);
}

async function insertPlaces(items) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const insertSql = `
      INSERT INTO places_full
        (osm_id, osm_type, name, name_en, address, city, postcode, type, tags, description, location, updated_at)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10,
         ST_SetSRID(ST_MakePoint($11, $12), 4326)::geography, now())
      ON CONFLICT (osm_id, osm_type) DO UPDATE SET
        name = EXCLUDED.name,
        name_en = EXCLUDED.name_en,
        address = EXCLUDED.address,
        city = EXCLUDED.city,
        postcode = EXCLUDED.postcode,
        type = EXCLUDED.type,
        tags = EXCLUDED.tags,
        description = EXCLUDED.description,
        location = EXCLUDED.location,
        updated_at = now();
    `;

    for (const it of items) {
      const params = [
        it.osm_id,
        it.osm_type,
        it.name,
        it.name_en,
        it.address,
        it.city,
        it.postcode,
        it.type,
        JSON.stringify(it.tags || {}),
        it.description,
        it.lon,
        it.lat
      ];
      await client.query(insertSql, params);
    }

    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

(async () => {
  try {
    console.log('Creating table if not exists...');
    await createTable();

    console.log('Fetching data from Overpass...');
    const res = await axios.post(OVERPASS_URL, overpassQuery, {
      headers: { 'Content-Type': 'text/plain' }
    });

    const elements = res.data.elements || [];
    console.log(`Got ${elements.length} elements from Overpass`);

    const normalized = elements.map(normalizeElement).filter(Boolean);
    console.log(`Filtered and normalized: ${normalized.length} places`);

    await insertPlaces(normalized);

    console.log('✅ All places successfully inserted into DB!');
    await pool.end();
  } catch (err) {
    console.error('❌ Error:', err.message || err);
  }
})();
