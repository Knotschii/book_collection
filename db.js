const {Pool} = require('pg');

const connectionString = process.env.PG_CONNECTIONSTRING;

const pool = new Pool({
 //   user: 'postgres',
 //   host: 'localhost',
 //   database: 'postgres',
 //   password: 'postgres',
 //   port: 5432,
    connectionString,
});

module.exports = pool;