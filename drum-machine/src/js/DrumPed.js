import { Component } from 'react';
import '../styles/DrumPed.css';

export class DrumPed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='drum-pad' id={this.props.id}>
        <audio ref='audio_tag' src={this.props.audio} className='clip' id={this.props.keyTrigger} controls />
        {this.props.keyTrigger}
      </li>
    );
  }
}
