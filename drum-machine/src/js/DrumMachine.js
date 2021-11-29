import React, { useRef, useEffect } from 'react';
import DrumPedsDisplay from './DrumPedsDisplay';
import '../styles/DrumMachine.css';

function DrumMachine() {
  const soundStr = useRef(null);

  // Add key press event listener
  useEffect(() => {
    window.addEventListener('keypress', onKeyPress);
  }, []);

  // On key press make sound
  const onKeyPress = (e) => {
    const keysArray = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    if (keysArray.includes(e.key.toUpperCase())) {
      playSound(e.key.toUpperCase());
    }
  };

  const playSound = (letter) => {
    const audioElem = document.getElementById(letter);
    audioElem.play(); //Play sound
    soundStr.current.textContent = audioElem.parentElement.id; //Update content
  };

  return (
    <div id='drum-machine'>
      <DrumPedsDisplay playSound={playSound} soundStr={soundStr} />
    </div>
  );
}

export default DrumMachine;
