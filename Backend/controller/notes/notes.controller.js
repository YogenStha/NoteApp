
const models = require("../../database/collectoins/note.js")
const {Note} = require("../../database/collectoins/note.js");
async function getNotes(req, res) {
      try {
    const notes = await models.Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getNotesById(req,res) {
      const noteId = req.params.id;
  const { title, content } = req.body;
  try {
    const updateNotes = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true }
    );
    res.json(updateNotes);
  } catch (err) {
    res.status(404).json({ message: "Note not found" });
  }
}

async function getNotesDeleted(req, res)  {
  const noteId = req.params.id;
  try {
    await Note.findByIdAndDelete(noteId);
    res.json({ message: "note is deleted" });
  } catch (err) {
    res.status(404).json({ message: "note not found" });
  }
};

// create new note
async function getNotesCreated (req, res)  {
  const { title, content } = req.body;
  const note = new Note({ title, content });
  try {
    const newNotes = await note.save();
    res.status(201).json(newNotes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  getNotes,
  getNotesById,
  getNotesCreated,
  getNotesDeleted
}