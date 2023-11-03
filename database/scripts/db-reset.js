import {pool} from "../index.js"

async function resetDatabase(){
try{
//delete database if exists
await pool.query(`DROP TABLE IF EXISTS notes CASCADE`);
//create database
await pool.query(
    `CREATE TABLE notes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    title VARCHAR(250) NOT NULL,
    note VARCHAR NOT NULL);`);
//seed database

} catch(error) {

    console.error("Database failed to reset: ". error)

} finally {
    await pool.end();
}
}

await resetDatabase()