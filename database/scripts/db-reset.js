import { pool } from "../index.js";

async function resetDatabase() {
  try {
    //delete database if exists
    await pool.query(`DROP TABLE IF EXISTS notes CASCADE`);
    //create database
    await pool.query(
      `CREATE TABLE notes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    title VARCHAR(50) NOT NULL,
    note VARCHAR(250) NOT NULL);`
    );
    //seed database
  } catch (error) {
    console.error("Database failed to reset: ", error);
  } finally {
    // closes the pool to the database
    await pool.end();
  }
}

await resetDatabase();
