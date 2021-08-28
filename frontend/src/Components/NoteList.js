import React from 'react';
import api from '../Services/api';
import '../style/noteList.css';
import NoteCard from './NoteCard';

const NoteList = ({ title, notes }) => {
  const [allNotes, setAllNotes] = React.useState([]);

  React.useEffect(() => {
    async function getAllNotes() {
      const response = await api.get('/annotations');
      setAllNotes(response.data);
    }
    getAllNotes();
  }, [title, notes]);

  return (
    <main>
      <ul>
        {allNotes.map((note, index) => {
          return (
            <li className="notepad-infos" key={index}>
              <NoteCard note={note} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default NoteList;
