import { Component } from 'react';
import { DrumPedsDisplay } from './DrumPedsDisplay';

export class DrumMachine extends Component {
  render() {
    return (
      <div id='drum-machine'>
        <DrumPedsDisplay />
      </div>
    );
  }
}
