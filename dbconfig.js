const { Pool, Client } = require('pg');

const dbconf = {
    user: 'postgres',
    host: 'localhost',
    database: 'gli-test-db',
    password: 'HileX_2018',
    port: 5432
};

const pool = new Pool(dbconf);

const client = new Client(dbconf);

exports.pool    = pool;
exports.client  = client;