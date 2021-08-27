import React from 'react';
import Aside from './Components/Aside';
import NoteList from './Components/NoteList';
import "./style/app.css";
import "./style/global.css";

const App = () => {
  return (
    <div id="app">
      <Aside />
      <NoteList />
    </div>
  );
};

export default App;
