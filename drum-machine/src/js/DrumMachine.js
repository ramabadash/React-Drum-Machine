import React, { useRef, useEffect } from 'react';
import DrumPedsDisplay from './DrumPedsDisplay';
import '../styles/DrumMachine.css';

function DrumMachine() {
  // Add key press event listener
  useEffect(() => {
    window.addEventListener('keypress', onKeyPress);
  }, []);

  // On key press make sound
  const onKeyPress = (e) => {
    const keysArray = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    if (keysArray.includes(e.key.toUpperCase())) {
      playSound(e.key.toUpperCase());
    } else {
      console.log('else');
    }
  };
  const playSound = (letter) => {
    document.getElementById(letter).play();
  };
  return (
    <div id='drum-machine'>
      <DrumPedsDisplay playSound={playSound} />
    </div>
  );
}

export default DrumMachine;
