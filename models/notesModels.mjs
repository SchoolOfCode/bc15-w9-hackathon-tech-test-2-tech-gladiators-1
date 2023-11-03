import { pool } from "../database/index.mjs";

export async function getAllFromNotesModel() {
  const data = await pool.query(`SELECT * FROM notes`);

  console.log(data.rows);

  return data.rows || null;
}
