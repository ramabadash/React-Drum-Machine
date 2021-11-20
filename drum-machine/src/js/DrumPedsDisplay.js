import { Component } from 'react';
import { bankOne, bankTwo } from '../data/drumPedsData';
import { DrumPed } from './DrumPed.js';
import '../styles/DrumPedsDisplay.css';

export class DrumPedsDisplay extends Component {
  render() {
    return (
      <div id='display'>
        <ul className='peds-list'>
          {bankOne.map((pedData) => (
            <DrumPed key={pedData.id} id={pedData.id} keyTrigger={pedData.keyTrigger} />
          ))}
        </ul>
      </div>
    );
  }
}
