import React from 'react';
import Aside from './Components/Aside';
import NoteList from './Components/NoteList';
import './style/app.css';
import './style/global.css';

const App = () => {
  const [title, setTitle] = React.useState('');
  const [notes, setNotes] = React.useState('');

  return (
    <div id="app">
      <Aside
        title={title}
        setTitle={setTitle}
        notes={notes}
        setNotes={setNotes}
      />
      <NoteList title={title} notes={notes} />
    </div>
  );
};

export default App;
