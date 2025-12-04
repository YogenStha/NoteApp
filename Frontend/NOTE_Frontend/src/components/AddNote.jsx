//componenets/AddNode.js

import React from "react";

const AddNote = ({ title, setTitle, content, setContent, onAddNote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Note</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 h-32 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      ></textarea>

      <button
        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        onClick={onAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
