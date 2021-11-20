import { Component } from 'react';
import { DrumPedsDisplay } from './DrumPedsDisplay';
import '../styles/DrumMachine.css';

export class DrumMachine extends Component {
  render() {
    return (
      <div id='drum-machine'>
        <DrumPedsDisplay />
      </div>
    );
  }
}
