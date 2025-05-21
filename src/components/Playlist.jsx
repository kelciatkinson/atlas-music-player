import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return <div className="w-full h-140 p-8 flex flex-col">
    <p className="font-bold text-lg px-0.25 text-(--color-text) dark:text-(--color-dark-text)">Playlist</p>
    <PlayListItem />
  </div>
}
