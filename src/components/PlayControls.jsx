import rewind from "../assets/rewind.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import fastforward from "../assets/fast-forward.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
  return <div>
    <button>1x</button>
    <button><img src={rewind} alt="rewind"></img></button>
    <button><img src={play} alt="play"></img></button>
    <button><img src={fastforward} alt="fast forward"></img></button>
    <button><img src={shuffle} alt="shuffle"></img></button>
  </div>
}