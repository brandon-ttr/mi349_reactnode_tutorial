import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})