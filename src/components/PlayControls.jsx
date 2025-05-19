import rewind from "../assets/rewind.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import fastforward from "../assets/fast-forward.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
  return <div id="play-controls" className="w-100 flex justify-between -mt-64">
    <button className="w-4 text-lg font-(--font-sans)">1x</button>
    <button className="w-6"><img src={rewind} alt="rewind"></img></button>
    <button className="w-12 h-12 flex justify-center border-solid border-2 rounded-md"><img className="w-6" src={play} alt="play"></img></button>
    <button className="w-6"><img src={fastforward} alt="fast forward"></img></button>
    <button className="w-6"><img src={shuffle} alt="shuffle"></img></button>
  </div>
}
