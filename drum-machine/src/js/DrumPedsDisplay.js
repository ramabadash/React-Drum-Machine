import React, { useState } from 'react';
import DrumPed from './DrumPed.js';
import '../styles/DrumPedsDisplay.css';
import { bankOne, bankTwo } from '../data/drumPedsData';

function DrumPedsDisplay({ playSound, soundStr }) {
  /***** STATES *****/
  const [soundsBank, setSoundsBank] = useState(bankOne);

  /***** FUNCTIONS *****/

  //Toggle banks btn
  const bankSlider =
    soundsBank === bankOne
      ? {
          float: 'left',
        }
      : {
          float: 'right',
        };

  return (
    <div id='display'>
      <p className='sound-str' ref={soundStr}></p>
      <p className='sound-icon'>
        <i className='fas fa-drum'></i>
      </p>
      <ul className='peds-list'>
        {soundsBank.map((pedData) => (
          <DrumPed
            key={pedData.id}
            id={pedData.id}
            keyTrigger={pedData.keyTrigger}
            audio={pedData.url}
            playSound={playSound}
          />
        ))}
      </ul>

      <div>
        Switch sound
        <div
          className='switch-bank outer-select'
          onClick={() => {
            setSoundsBank((prevSound) => (prevSound === bankOne ? bankTwo : bankOne));
          }}
        >
          <div className='inner-select' style={bankSlider}></div>
        </div>
      </div>
    </div>
  );
}

export default DrumPedsDisplay;
