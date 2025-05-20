import volume from "../assets/volume-2.svg";

export default function VolumeControls() {
  return <div className="w-100 h-4 flex items-center -mt-62">
      <img src={volume} alt="volume" className="w-6 h-6" />
      <input type="range" defaultValue="50" className="w-full accent-(--color-primary)"></input>
  </div>
}
