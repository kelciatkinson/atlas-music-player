import React, { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";


interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
}

export default function MusicPlayer() {
  console.log("MusicPlayer component rendered");
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const canGoPrev = currentSongIndex > 0;
  const canGoNext = currentSongIndex < playlist.length - 1;
  const [isShuffled, setIsShuffed] = useState(false);
  const [shuffledLog, setShuffledLog] = useState<number[]>([0]);

  // Fetches Playist from API
  useEffect(() => {
   const fetchPlaylist = async () => {
    try {
      console.log("Starting to fetch playlist data");
      const res = await fetch('/api/v1/playlist');
      const playlist = await res.json();
      console.log("Playlist fetched:", playlist);
      setPlaylist(playlist);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
    }
  };
  fetchPlaylist();
  }, []);

  // Fetch currenty selected song
  useEffect(() => {
    if (playlist.length > 0) {
      const fetchCurrentSong = async () => {
        try {
          console.log("Fetching current song");
          const songId = playlist[currentSongIndex].id;
          const res = await fetch(`/api/v1/songs/${songId}`);
          const songData = await res.json();
          console.log("Current song fetched:", songData);
          setCurrentSong(songData);
        } catch (err) {
          console.error(err);
        }
      };
      fetchCurrentSong();
    }
  }, [currentSongIndex, playlist]);

  if (loading) {
    console.log("Showing Loading Skeleton");
    return <LoadingSkeleton />;
  }
  
  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
  };

  const handlePrev = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  }


  console.log("Showing main MusicPlayer content");
  return <div className="flex flex-col md:flex-row shadow-lg dark:shadow-(--color-dark-text) rounded-lg self-center w-4xl max-w-full bg-(--color-bg) dark:bg-(--color-dark-bg-2)">
    <CurrentlyPlaying currentSong={currentSong} onPrev={handlePrev} onNext={handleNext} canGoPrev={canGoPrev} canGoNext={canGoNext} />
    <div className="h-px w-0.5 md:w-0.5 md:h-auto bg-neutral-300"></div>
    <Playlist playlist={playlist} currentSongIndex={currentSongIndex} onSongSelect={handleSongSelect} />
  </div>
}
 