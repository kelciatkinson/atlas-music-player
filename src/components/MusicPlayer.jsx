import React, { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return <div className="flex flex-col md:flex-row shadow-lg dark:shadow-(--color-dark-text) rounded-lg self-center w-4xl max-w-full bg-(--color-bg) dark:bg-(--color-dark-bg-2)">
    <CurrentlyPlaying />
    <div className="h-0.25 w-full md:w-0.25 md:h-auto self-stretch bg-neutral-300"></div>
    <Playlist />
  </div>
}
 