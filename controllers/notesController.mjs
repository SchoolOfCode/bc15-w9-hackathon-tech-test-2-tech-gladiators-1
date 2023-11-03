import { getAllFromNotesModel } from "../models/notesModels.mjs";

export async function getAllNotesController(req, res) {
  try {
    const allNotes = await getAllFromNotesModel();
    res.status(200).send({ status: "success", data: allNotes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occured while fetching all notes.",
    });
  }
}
