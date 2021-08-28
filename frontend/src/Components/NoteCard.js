import React from 'react';

const NoteCard = ({note}) => {
  return (
    <React.Fragment>
      <div>
        <strong>{note.title}</strong>
        <div>X</div>
      </div>

      <textarea defaultValue={note.notes}></textarea>

      <span>!</span>
    </React.Fragment>
  );
};

export default NoteCard;
