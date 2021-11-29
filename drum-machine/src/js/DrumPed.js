import React, { useRef } from 'react';
import '../styles/DrumPed.css';

function DrumPed({ id, audio, keyTrigger }) {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };
  return (
    <li className='drum-pad' id={id} onClick={playSound}>
      <audio ref={audioRef} src={audio} className='clip' id={keyTrigger} controls />
      {keyTrigger}
    </li>
  );
}

export default DrumPed;
