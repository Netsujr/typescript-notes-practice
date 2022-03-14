import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'First Note',
    text: 'This is the first note',
    color: '#ff0000',
    date: (new Date).toString(),
  }]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
