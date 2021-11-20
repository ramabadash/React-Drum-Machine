import { Component } from 'react';
import { bankOne, bankTwo } from '../data/drumPedsData';
import '../styles/DrumPedsDisplay.css';

export class DrumPedsDisplay extends Component {
  render() {
    return (
      <div id='display'>
        <ul className='peds-list'>
          {/* TODO REPLACE LI WITH COMPONENT */}
          {bankOne.map((pedData) => (
            <li key={pedData.id} id={pedData.id} className='drum-pad'>
              {pedData.keyTrigger}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
