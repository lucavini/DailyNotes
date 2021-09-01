import React from 'react';
import { AiTwotoneDelete, AiFillExclamationCircle } from 'react-icons/ai';
import api from '../Services/api';
const NoteCard = ({ note, handleDelete, handleChangePriority }) => {
  const [changedNotes, setChangedNotes] = React.useState(note.notes);

  async function handleSave(notes, value) {
    if (value !== notes) {
      await api.post(`/contents/${note._id}`, {
        notes: value,
      });
    }
  }

  function handleChange(target, notes) {
    setChangedNotes(target.value);
    handleSave(notes, target.value);
  }

  return (
    <React.Fragment>
      <div>
        <strong>{note.title}</strong>
        <div onClick={() => handleDelete(note._id)}>
          <AiTwotoneDelete />
        </div>
      </div>

      <textarea
        defaultValue={changedNotes}
        onChange={({ target }) => handleChange(target, note.notes)}
      />

      <span
        className="setPriority"
        onClick={() => handleChangePriority(note._id)}
      >
        <AiFillExclamationCircle />
      </span>
    </React.Fragment>
  );
};

export default NoteCard;
