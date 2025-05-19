import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return <div className="flex flex-row p-8 min-h-screen gap-4">
    <CurrentlyPlaying />
    <Playlist />
  </div>
}
