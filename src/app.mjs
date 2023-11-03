import express from "express";
import cors from "cors";
import morgan from "morgan";
import { notesRoute } from "../routes/notesRoutes.mjs";

export const app = express();

//import all routes

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//route to notes database
app.use("/notes", notesRoute);
