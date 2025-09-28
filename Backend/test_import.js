//This specific file wasn't created by me, right now I have 20 imported places just to test that everything works correctly.

const axios = require('axios');
const pool = require('./db/db');

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

const overpassQuery = `
[out:json][timeout:25];
area["name"="Pinellas County"]->.pinellas;
node(area.pinellas)[amenity];
out body 20;
`;

function normalizeElement(el) {
  const lat = el.lat ?? (el.center && el.center.lat);
  const lon = el.lon ?? (el.center && el.center.lon);
  if (!lat || !lon) return null;

  const tags = el.tags || {};
  const name = tags.name || null;
  const name_en = tags['name:en'] || null;
  const addressParts = [
    tags['addr:housenumber'],
    tags['addr:street'],
  ].filter(Boolean);
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

async function insertPlaces(items) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const insertSql = `
    INSERT INTO places
      (osm_id, osm_type, name, name_en, address, city, postcode, type, tags, description, location, updated_at)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10, ST_SetSRID(ST_MakePoint($11, $12), 4326)::geography, now())
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
    console.log('Fetching from Overpass...');
    const res = await axios.post(OVERPASS_URL, overpassQuery, {
      headers: { 'Content-Type': 'text/plain' }
    });

    const elements = res.data.elements || [];
    console.log('Got elements:', elements.length);

    const normalized = elements.map(normalizeElement).filter(Boolean);
    console.log('Normalized places:', normalized.length);

    await insertPlaces(normalized);

    console.log('Inserted successfully into DB!');
    await pool.end();
  } catch (err) {
    console.error('Error:', err.message || err);
  }
})();
