import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";

function NoteCard({ note, onDelete, id, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(note.title);
  const [newContent, setNewContent] = useState(note.content);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (newTitle === '' || newContent === ''){
        alert('Empty note cannot be created');
        return;
    }
    onUpdate(id, newTitle, newContent);
    setIsEditing(false);
  };


  return (
    <div className="note-card">
      {isEditing ? (
        <div>
          <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
          <br />
          <textarea value={newContent} onChange={(event) => setNewContent(event.target.value)} />
          <button onClick={handleUpdate}><MdSave size={25}/></button>
        </div>
      ) : (
        <div>
          <h1 className="note-title">{note.title}</h1>
          <p className="note-content">{note.content}</p>
          <button onClick={() => setIsEditing(true)}><MdEdit size={25} /></button>
        </div>
      )}

<button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </div>
  );
}

export default NoteCard;
