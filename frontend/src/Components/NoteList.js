import React from 'react';
import api from '../Services/api';
import '../style/noteList.css';
import NoteCard from './NoteCard';

const NoteList = ({ submit, priority }) => {
  const [allNotes, setAllNotes] = React.useState([]);

  async function getAllNotes() {
    const response = await api.get('/annotations');
    setAllNotes(response.data);
  }

  const loadNotesPerPriority = React.useCallback(async (param) => {
    let option = undefined;

    if (param === 'Prioridade') {
      option = true;
    } else if (param === 'Normal') {
      option = false;
    }

    if (option === undefined) {
      getAllNotes();
    } else {
      const params = { priority: option };
      const response = await api.get('/priorities', { params });
      if (response) {
        setAllNotes(response.data);
      }
    }
  }, []);

  React.useEffect(() => {
    loadNotesPerPriority(priority);
  }, [priority, loadNotesPerPriority]);

  React.useEffect(() => {
    if (submit !== 'Todos') {
      loadNotesPerPriority(submit);
    } else {
      getAllNotes();
    }
  }, [submit, loadNotesPerPriority]);

  async function handleDelete(id) {
    const deletedNote = await api.delete(`/annotations/${id}`);
    if (deletedNote) {
      setAllNotes(allNotes.filter((note) => note._id !== id));
    }
  }

  async function handleChangePriority(id) {
    const note = await api.post(`/priorities/${id}`);
    if (note && priority !== 'Todos') {
      loadNotesPerPriority(priority);
    } else if (note) {
      getAllNotes();
    }
  }

  return (
    <main>
      <ul>
        {allNotes
          .map((note, index) => (
            <li
              className={'notepad-infos' + (note.priority ? ' priority' : '')}
              key={index}
            >
              <NoteCard
                note={note}
                handleDelete={handleDelete}
                handleChangePriority={handleChangePriority}
              />
            </li>
          ))
          .reverse()}
      </ul>
    </main>
  );
};

export default NoteList;
