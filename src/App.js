import React, { useState } from 'react';
import Header from './Header';
import NoteArea from './NoteArea';
import NoteCard from './NoteCard';

function App(props) {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote(note){
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes, note];
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return newNotes;
    });
  } 

  function deleteNote(id) {
    setNotes((prevValue) => {
      const newNotes = prevValue.filter((note,index) => index !== id);
      //if index is not equal to id of passed note then it will not deleted, it will be added to the new array
      localStorage.setItem('notes', JSON.stringify(newNotes));
      // returns new updated(after deleting) array
      return newNotes;
    });
  }
  

  function updateNote(id, title, content) {
    setNotes((prevNotes) => {
      const newNotes = prevNotes.map((note, index) => {
        if (index === id) {
          return { ...note, title, content };
        } else {
          return note;
        }
      });
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return newNotes;
    });
  }
  

  return (
    <div>
      <Header />
      <NoteArea onAdd={addNote} />
      {notes.map((note, index) => (
        <NoteCard 
        key={index}
        id={index} 
        note={note}
        onDelete = {deleteNote}
        onUpdate = {updateNote} />
      ))}
    </div>
  );
}

export default App;