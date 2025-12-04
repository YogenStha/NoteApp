const express = require('express')
const notesController = require('../../controller/notes/notes.controller')
const notesRouter = express.Router();


notesRouter.get("/notes", notesController.getNotes);

// update data by id
notesRouter.put("/notes/:id", notesController.getNotesById);

// delete data
notesRouter.delete("/notes/:id", notesController.getNotesDeleted);

// create new note
notesRouter.post("/notes",notesController.getNotesCreated);

module.exports =  notesRouter