import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import NoteList from "./components/NoteList.jsx";
import AddNote from "./components/AddNote.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("https://noteappback-kexq.onrender.com/api/v1/notes")
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const handleAddNote = () => {
    axios
      .post("https://noteappback-kexq.onrender.com/api/v1/notes", { title, content })
      .then((response) => {
        setNotes([...notes, response.data]);
        setTitle("");
        setContent("");
      })
      .catch((error) => console.error("Error adding note:", error));
  };

  const handleEditNote = (id, updatedTitle, updatedContent) => {
    axios
      .put(`https://noteappback-kexq.onrender.com/api/v1/notes/${id}`, {
        title: updatedTitle,
        content: updatedContent,
      })
      .then((response) => {
        const updatedNotes = notes.map((note) =>
          note._id === id ? response.data : note
        );
        setNotes(updatedNotes);
      })
      .catch((error) => console.error("Error updating note:", error));
  };

  const handleDeleteNote = (id) => {
    axios
      .delete(`https://noteappback-kexq.onrender.com/api/v1/notes/${id}`)
      .then(() => {
        const updatedNotes = notes.filter((note) => note._id !== id);
        setNotes(updatedNotes);
      })
      .catch((error) => console.error("Error deleting note:", error));
  };

  return (
    <BrowserRouter>
      <div className="w-full max-w-2xl mx-auto my-5 p-5 bg-white shadow-md rounded sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          Notes App
        </h1>

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>

          <Route
            path="/notes"
            element={
                <ProtectedRoute>
              <>
                <AddNote
                  title={title}
                  setTitle={setTitle}
                  content={content}
                  setContent={setContent}
                  onAddNote={handleAddNote}
                />
                <NoteList
                  notes={notes}
                  onEditNote={handleEditNote}
                  onDeleteNote={handleDeleteNote}
                />
              </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;