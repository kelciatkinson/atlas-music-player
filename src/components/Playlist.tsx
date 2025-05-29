import PlayListItem from "./PlayListItem";
import React from "react";


interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
}


interface PlaylistProps {
  playlist: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

export default function Playlist({ playlist, currentSongIndex, onSongSelect }: PlaylistProps) {

  return (
    <div className="w-full h-140 p-8 flex flex-col">
      <p className="font-bold text-lg px-0.25 text-(--color-text) dark:text-(--color-dark-text)">Playlist</p>
      {playlist.map((song, index) =>(
        <PlayListItem key={song.id} title={song.title} artist={song.artist} duration={song.duration} isActive={index === currentSongIndex} onClick={() => onSongSelect(index)} />
      ))}
    </div>
  )
}
