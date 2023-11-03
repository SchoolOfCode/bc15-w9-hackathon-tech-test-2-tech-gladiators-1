import * as notesModels from "../models/notesModels.mjs";

//get all notes from database
export async function getAllNotesController(req, res) {
  try {
    const allNotes = await notesModels.getAllFromNotesModel();
    res.status(200).send({ status: "success", data: allNotes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occured while fetching all notes.",
    });
  }
}

//delete by id
export async function deleteNoteController(req, res) {
  try {
    const id = req.params.id;
    const deletedNote = await notesModels.deleteFromNotesModel(id);
    res.status(200).send({ status: "success", data: deletedNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "An error occured while deleting a note.",
    });
  }
}

//update note by id
export async function updateNoteController(req, res) {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const note = req.body.note;
    const updatedNote = await notesModels.updateNotesModel(id, title, note);
    res.status(200).send({ status: "success", data: updatedNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "An error occured while updating a note.",
    });
  }
}

export async function createNoteController(req, res) {
  try {
    const title = req.body.title;
    const note = req.body.note;
    const newNote = await notesModels.addNoteModel(title, note);
    res.status(200).send({ status: "success", data: newNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "An error occured while creating a new note.",
    });
  }
}
