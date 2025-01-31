// import { client, databases, DATABASE_ID, COLLECTION_ID } from "./appwrite";
import { databases } from "./config";
import { ID } from "appwrite";

const collections = [
  {
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    id: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    name: "notes",
  },
];

const db = {};

collections.forEach((col) => {
  db[col.name] = {
    create: (payload, id = ID.unique(), permissions) =>
      databases.createDocument(
        col.databaseId,
        col.id,
        id,
        payload,
        permissions
      ),
    update: (id) =>
      databases.updateDocument(col.databaseId, col.id, id, payload),
    get: (id) => databases.getDocument(col.databaseId, col.id, id),
    list: (queries = []) => databases.listDocuments(col.databaseId, col.id, queries),
    delete: (id) => databases.deleteDocument(col.databaseId, col.id, id),
  };
});

export { db };