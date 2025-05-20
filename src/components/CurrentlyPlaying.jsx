import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return <div className="h-160 p-8 flex flex-col justify-between items-center">
    <CoverArt />
    <SongTitle />
    <PlayControls />
    <VolumeControls />
  </div>
}
