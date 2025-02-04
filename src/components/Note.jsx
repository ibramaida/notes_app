import React, { useState } from "react";
import { db } from "../appwrite/databases";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Note = ({ noteData, setNotes }) => {
  const [note, setNote] = useState(noteData);

  const handleUpdate = async () => {
    const completed = !note.completed;
    db.notes.update(note.$id, { completed });
    setNote({ ...note, completed: completed });
  };

  const handleDelete = async () => {
    db.notes.delete(note.$id)
    setNotes(prevNotes => prevNotes.filter(i => i.$id !== note.$id))
  }
  return (
    <div className="note">
      <span onClick={handleUpdate} className="note-body">
        {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
      </span>
      <div onClick={handleDelete} className="note-del">
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  );
};

export default Note;
