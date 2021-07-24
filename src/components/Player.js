import React, { useState, useRef, useEffect } from 'react';

import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

const Player = props => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      // if it's playing, just let it continue
      audioElement.current.play();
    } else {
      // otherwise, it's paused
      audioElement.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          // if we're at the end of the songs, skip to the beginning
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          // if we're at the beginning of the songs, skip to the last
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  }

  return (
    <div className='c-player'>
      <audio src={props.songs[props.currentSongIndex].src} ref={audioElement} />
      <h4>Playing now</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} />
      <p><strong>Next up: </strong>
        {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
}

export default Player;
