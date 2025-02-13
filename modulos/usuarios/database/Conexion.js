import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env/env' });

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_DATABASE || 'agrodb',
});

export default pool;