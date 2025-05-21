import placeholder from "../assets/placeholder.svg";
import music from "../assets/music.jpg";

export default function CoverArt() {
  return <div className="pb-5">
    <img src={music} alt="cover art" className="block w-100 rounded-lg"></img>
  </div>
}
