import { pool } from "../database/index.mjs";

//get all notes
export async function getAllFromNotesModel() {
  const data = await pool.query(`SELECT * FROM notes`);

  console.log(data.rows);

  return data.rows || null;
}

//delete note
export async function deleteFromNotesModel(id) {
  const queryText = `
        DELETE FROM notes 
        WHERE id = $1 
        RETURNING *`;

  const data = await pool.query(queryText, [id]);

  return data.rows || null;
}

// update notes
export async function updateNotesModel(id, title, model) {
  const queryText = `
        UPDATE notes 
        SET title = $2, note = $3
        WHERE id = $1
        RETURNING *`;

  const data = await pool.query(queryText, [id, title, model]);

  return data.rows[0] || null;
}

// create a note
export async function addNoteModel(title, note) {
  const queryText = `
    INSERT INTO notes
    (title, note)
    VALUES ($1, $2) RETURNING *`;
  const data = await pool.query(queryText, [title, note]);
  return data.rows[0] || null;
}
