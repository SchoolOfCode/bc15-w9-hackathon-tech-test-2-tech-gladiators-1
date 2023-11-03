import pg from "pg"
import 'dotenv/config'


const connectionString = process.env.DB_CONNECTION_STRING

if(!connectionString){
    throw new Error("No DB_CONNECTION_STRING found");
}

export const pool = new pg.Pool({connectionString});