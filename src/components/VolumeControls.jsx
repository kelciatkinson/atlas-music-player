import volume from "../assets/volume-2.svg";

export default function VolumeControls() {
  return <div className="w-100 h-4 flex items-center -mt-62">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[var(--color-text)] hover:stroke-(--color-dark-text) transition duration-300 ease-in-out dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
      <input type="range" defaultValue="50" className="w-full accent-(--color-primary) dark:accent-(--color-dark-primary)"></input>
  </div>
}
