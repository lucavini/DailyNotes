import React from 'react';

const NoteCard = () => {
  return (
    <React.Fragment>
      <div>
        <strong>Fazer Compras</strong>
        <div>X</div>
      </div>

      <textarea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>

      <span>!</span>
    </React.Fragment>
  );
};

export default NoteCard;
