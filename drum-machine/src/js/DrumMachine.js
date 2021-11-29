import React, { useRef, useEffect, useState } from 'react';
import DrumPedsDisplay from './DrumPedsDisplay';
import '../styles/DrumMachine.css';

function DrumMachine() {
  const soundStr = useRef(null);
  const [sliderVal, setSliderVal] = useState(0.3);

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
    audioElem.volume = sliderVal;
    audioElem.play(); //Play sound
    soundStr.current.textContent = audioElem.parentElement.id; //Update content
  };

  const adjustVolume = (e) => {
    setSliderVal(e.target.value);
  };

  return (
    <div id='drum-machine' className='inner-container'>
      <h1>My DrumMachine</h1>
      <DrumPedsDisplay playSound={playSound} soundStr={soundStr} />
      <div className='volume-slider'>
        Volume
        <input max='1' min='0' onChange={adjustVolume} step='0.01' type='range' value={sliderVal} />
      </div>
    </div>
  );
}

export default DrumMachine;
