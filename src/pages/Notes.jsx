import { useState, useEffect } from "react";
import { db } from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import { Query } from "appwrite";
import Note from "../components/Note";
import ThemeOption from "../components/ThemeOption";
import Header from "../components/Header";

const Notes = () => {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    initAppwrite();
  }, []);

  const initAppwrite = async () => {
    

    const response = await db.notes.list([Query.orderDesc("$createdAt")]);

    setNotes(response.documents);
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <h1 className="heading">Note App</h1>
        <NoteForm setNotes={setNotes} />
        <div className="notes">
          {notes.map((note) => (
            <Note key={note.$id} noteData={note} setNotes={setNotes} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
