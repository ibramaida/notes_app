import { useState, useEffect } from "react";
// import { databases } from "../appwrite/config"
import { db } from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import { Query } from "appwrite";
import Note from "../components/Note";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    initAppwrite();
  }, []);

  const initAppwrite = async () => {
    // const response = await databases.listDocuments(
    //   import.meta.env.VITE_APPWRITE_DATABASE_ID,
    //   import.meta.env.VITE_APPWRITE_COLLECTION_ID)

    const response = await db.notes.list([Query.orderDesc("$createdAt")]);

    setNotes(response.documents);
  };

  return (
    <div className="wrapper">
    <h1>Note App</h1>
    <NoteForm setNotes={setNotes} />
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.$id} noteData={note} setNotes={setNotes} />
      ))}
    </div>
    </div>
  );
};

export default Notes;
