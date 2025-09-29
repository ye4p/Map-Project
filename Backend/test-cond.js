let nameR = true
let russian = true
let ukrainian = true
let type = true

let query=`SELECT *,
        ST_X(location::geometry) AS lon,
        ST_Y(location::geometry) AS lat
        FROM places `
    let conditions = [];
    if (nameR) {
        conditions.push(`
        name ILIKE $1
        `)
    }
    if (russian) {
        conditions.push(`
        russian = true
        `)
    }
    if (ukrainian) {
        conditions.push(`
        ukrainian = true
        `)
    }
    if (type) {
        conditions.push(`
        type = $2
        `)
    }
 conditions = conditions.join(' AND ')


    if (conditions) {
        query = query + `
        WHERE ` + conditions
    }
    console.log(query)