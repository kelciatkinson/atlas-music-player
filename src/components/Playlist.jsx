import PlayListItem from "./PlayListItem";

export default function Playlist() {

  return <div className="w-100 h-140">
    <p className="font-bold text-lg px-0.25">Playlist</p>
    <PlayListItem />
    <PlayListItem />
  </div>
}
