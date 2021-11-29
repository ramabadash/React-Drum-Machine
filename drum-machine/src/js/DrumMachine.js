import React, { useRef, useEffect, useState } from 'react';
import DrumPedsDisplay from './DrumPedsDisplay';
import '../styles/DrumMachine.css';

function DrumMachine() {
  /***** REFS & STATES *****/
  const soundStr = useRef(null); //Sound string container element
  const [sliderVal, setSliderVal] = useState(0.3); //Volume by slider

  /***** FUNCTIONS *****/
  // Add key press event listener to document on first render
  useEffect(() => {
    window.addEventListener('keypress', onKeyPress);
  }, []);

  // On keyboard press make sound
  const onKeyPress = (e) => {
    const keysArray = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']; //Trigger keys array
    if (keysArray.includes(e.key.toUpperCase())) {
      playSound(e.key.toUpperCase());
    }
  };
  // Play the audio sound
  const playSound = (letter) => {
    const audioElem = document.getElementById(letter); // Get audio elem by id
    audioElem.volume = sliderVal; // Adjust volume slider
    audioElem.play(); //Play sound
    soundStr.current.textContent = audioElem.parentElement.id; //Update content
  };
  //Adjust volume by moving the range elem
  const adjustVolume = (e) => {
    setSliderVal(e.target.value);
  };

  return (
    <div id='drum-machine' className='inner-container'>
      <h1>
        My DrumMachine <i className='fas fa-drum'></i>
      </h1>
      <DrumPedsDisplay playSound={playSound} soundStr={soundStr} />
      <div className='volume-slider'>
        Volume
        <input max='1' min='0' onChange={adjustVolume} step='0.01' type='range' value={sliderVal} />
      </div>
    </div>
  );
}

export default DrumMachine;
