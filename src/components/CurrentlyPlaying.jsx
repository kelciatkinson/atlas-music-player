import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return <div className="h-140 flex flex-col justify-between">
    <CoverArt />
    <SongTitle />
    <PlayControls />
    <VolumeControls />
  </div>
}
