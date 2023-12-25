import React from 'react';
import '../styles/App.css';
import useToggle from './useToggle.js';

const App = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <button id='button' onClick={toggle}>
      {isToggled ? 'Toggled' : 'Click to Toggle'}
    </button>
  );
};

export default App;
