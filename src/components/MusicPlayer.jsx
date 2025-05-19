import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  return <div className="flex flex-row p-8 min-h-screen gap-4">
    <div className="h-140 flex flex-col justify-between">
        <CoverArt />
        <SongTitle />
        <PlayControls />
        <VolumeControls />
    </div>
    <PlayListItem />
  </div>
}
