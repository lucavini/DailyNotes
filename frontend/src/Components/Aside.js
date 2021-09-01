import React from 'react';
import api from '../Services/api';
import '../style/aside.css';
import RadioButton from './RadioButton';

const Aside = ({ setSubmit, priority, setPriority }) => {
  const [title, setTitle] = React.useState('');
  const [notes, setNotes] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    let option;
    if (priority === 'Prioridade') {
      option = true;
    } else if (priority === 'Normal' || priority === 'Todos') {
      option = false;
    }

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: option,
    });

    if (response.status === 200) {
      setTitle('');
      setNotes('');
      setSubmit(priority);
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
            maxLength="30"
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

        {title && notes ? (
          <button type="submit">Salvar</button>
        ) : (
          <button disabled type="submit">
            Salvar
          </button>
        )}
      </form>

      <RadioButton
        options={['Todos', 'Prioridade', 'Normal']}
        value={priority}
        setValue={setPriority}
      />
    </aside>
  );
};

export default Aside;
