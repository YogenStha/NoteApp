// components/NoteList.js

import React from "react";

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <li
          key={note._id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <strong className="block text-lg font-semibold text-gray-800 mb-1">
            {note.title}
          </strong>
          <p className="text-gray-600 mb-3">{note.content}</p>

          <div className="flex space-x-3">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
              onClick={() =>
                onEditNote(
                  note._id,
                  prompt("Enter updated title:", note.title),
                  prompt("Enter updated content:", note.content)
                )
              }
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
              onClick={() => onDeleteNote(note._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
