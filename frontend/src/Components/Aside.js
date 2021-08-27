import React from 'react';
import '../style/aside.css';

const Aside = () => {
  return (
    <aside>
      <strong>Caderno de Notas</strong>
      <form>
        <div className="input-block">
          <label htmlFor="titulo">Titulo da Anotação</label>
          <input id="titulo" />
        </div>

        <div className="input-block">
          <label htmlFor="nota">Anotações</label>
          <textarea
            id="nota"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></textarea>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
};

export default Aside;
