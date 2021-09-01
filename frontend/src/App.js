import React from 'react';
import Aside from './Components/Aside';
import NoteList from './Components/NoteList';
import './style/app.css';
import './style/global.css';

const App = () => {
  const [submit, setSubmit] = React.useState(false);
  const [priority, setPriority] = React.useState('Todos');


  return (
    <div id="app">
      <Aside
        setSubmit={setSubmit}
        priority={priority}
        setPriority={setPriority}
      />
      <NoteList submit={submit} priority={priority} />
    </div>
  );
};

export default App;
