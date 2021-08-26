import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <p>{count}</p>
      <p>DayNotes</p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
};

export default App;
