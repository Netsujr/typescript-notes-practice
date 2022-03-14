import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Note {
  id: string,
  title: string,
  date: string,
  text: string,
  color: string,
}

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'First Note',
    text: 'This is the first note',
    color: '#ff0000',
    date: (new Date).toString(),
  }]);

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
