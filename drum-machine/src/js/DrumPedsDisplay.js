import React from 'react';
import { bankOne, bankTwo } from '../data/drumPedsData';
import DrumPed from './DrumPed.js';
import '../styles/DrumPedsDisplay.css';

function DrumPedsDisplay() {
  return (
    <div id='display'>
      <ul className='peds-list'>
        {bankOne.map((pedData) => (
          <DrumPed key={pedData.id} id={pedData.id} keyTrigger={pedData.keyTrigger} audio={pedData.url} />
        ))}
      </ul>
    </div>
  );
}

export default DrumPedsDisplay;
