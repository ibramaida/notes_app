import React from "react";
import { db } from "../appwrite/databases";

const NoteForm = ({ setNotes }) => {

  const handleAdd = async (e) => {
    e.preventDefault();
    const noteBody = e.target.noteBody.value;
    if (noteBody === "") return;
    try {
      const payload = { body: noteBody };
      const response = await db.notes.create(payload);
      setNotes((prevNotes) => [response, ...prevNotes]);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleAdd} className="form">
      <input className="input" type="text" name="noteBody" placeholder="Enter your note" />
    </form>
  );
};

export default NoteForm;
