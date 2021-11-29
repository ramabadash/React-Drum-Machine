import React from 'react';
import '../styles/DrumPed.css';

function DrumPed({ id, audio, keyTrigger, playSound }) {
  return (
    <li
      className={`drum-pad ${keyTrigger}`}
      id={id}
      onClick={(e) => {
        playSound(e.target.classList[1]); //Send the trigger key
      }}
    >
      <audio src={audio} className='clip' id={keyTrigger} controls />
      {keyTrigger}
    </li>
  );
}

export default DrumPed;
