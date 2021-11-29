import React from 'react';
import '../styles/DrumPed.css';

function DrumPed({ id, audio, keyTrigger }) {
  return (
    <li className='drum-pad' id={id}>
      <audio src={audio} className='clip' id={keyTrigger} controls />
      {keyTrigger}
    </li>
  );
}

export default DrumPed;
