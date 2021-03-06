import { useState, useEffect } from 'react';

import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: 'Forget me to ft. Halsey',
      artist: 'Machine Gun Kelly',
      img_src: './images/song-1.jpg',
      src: './music/on-n-on.mp3'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      img_src: './images/song-2.jpg',
      src: './music/somebody-new.mp3'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      img_src: './images/song-3.jpg',
      src: './music/on-n-on.mp3'
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
      img_src: './images/song-4.jpg',
      src: './music/on-n-on.mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  // every time the current song index changes, we need to update the next song index
  useEffect(() => {
    setNextSongIndex(() => {
      // If the next song index is greater than the length of songs, return to the beginning
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
