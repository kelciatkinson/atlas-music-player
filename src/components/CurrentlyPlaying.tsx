import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import React, { useState } from "react";


interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
}

interface CurrentlyPlayingProps {
  currentSong: Song | null;
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function CurrentlyPlaying({ currentSong, onPrev, onNext, canGoPrev, canGoNext }: CurrentlyPlayingProps) {
  return <div className="h-160 p-8 flex flex-col justify-between items-center w-full">
    <CoverArt cover={currentSong?.cover || ""} songId={currentSong?.id} />
    <SongTitle title={currentSong?.title || ""} artist={currentSong?.artist || ""} />
    <PlayControls onNext={onNext} onPrev={onPrev} canGoNext={canGoNext} canGoPrev={canGoPrev} />
    <VolumeControls />
  </div>
}
