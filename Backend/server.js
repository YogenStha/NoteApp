const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const PORT = 5000;

// middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyparser.json());

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/NoteApp")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log("Mongo Error", err));

// model
const Note = mongoose.model("Note", {
  title: String,
  content: String
});

// routes
app.get("/", (req, res) => {
  res.send("this is the root route");
});

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update data by id
app.put("/api/notes/:id", async (req, res) => {
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
});

// delete data
app.delete("/api/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  try {
    await Note.findByIdAndDelete(noteId);
    res.json({ message: "note is deleted" });
  } catch (err) {
    res.status(404).json({ message: "note not found" });
  }
});

// create new note
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content });
  try {
    const newNotes = await note.save();
    res.status(201).json(newNotes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`server is running on port http://localhost:${PORT}`)
);