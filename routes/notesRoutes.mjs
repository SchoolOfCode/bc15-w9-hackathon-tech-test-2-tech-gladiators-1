import express from "express";
import * as notesControllers from "../controllers/notesController.mjs";

export const notesRoute = express.Router();

notesRoute.get("/", notesControllers.getAllNotesController);
notesRoute.delete("/:id", notesControllers.deleteNoteController);
notesRoute.patch("/:id", notesControllers.updateNoteController);
notesRoute.post("/", notesControllers.createNoteController);
