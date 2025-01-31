

import { useState, useEffect } from "react"
// import { databases } from "../appwrite/config"
import { db } from "../appwrite/databases"

const Note = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    initAppwrite()
  }, [])

  const initAppwrite = async () => {
    // const response = await databases.listDocuments(
    //   import.meta.env.VITE_APPWRITE_DATABASE_ID,
    //   import.meta.env.VITE_APPWRITE_COLLECTION_ID)

    const response = await db.notes.list()

    setNotes(response.documents)
  }

  return (
    <div>
      {notes.map(note => (
        <p key={note.$id}>{note.body}</p>
      ))}
    </div>
  )
}

export default Note