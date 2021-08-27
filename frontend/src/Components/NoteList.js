import React from 'react';
import '../style/noteList.css';
import NoteCard from './NoteCard';

const NoteList = () => {
  return (
    <main>
      <ul>
        <li className="notepad-infos">
          <NoteCard />
        </li>
      </ul>
    </main>
  );
};

export default NoteList;
