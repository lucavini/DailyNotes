import React from 'react';
import api from '../Services/api';
import '../style/aside.css';

const Aside = ({ title, setTitle, notes, setNotes }) => {
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false,
    });

    if (response.status === 200) {
      setTitle('');
      setNotes('');
    }
  }

  return (
    <aside>
      <strong>Caderno de Notas</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="titulo">Titulo da Anotação</label>
          <input
            id="titulo"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="nota">Anotações</label>
          <textarea
            id="nota"
            required
            value={notes}
            onChange={({ target }) => setNotes(target.value)}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
};

export default Aside;
