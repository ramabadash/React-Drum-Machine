import { Component } from 'react';
import '../styles/DrumMachine.css';

export class DrumPed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className='drum-pad' id={this.props.id}>
        {this.props.keyTrigger}
      </li>
    );
  }
}
