import rewind from "../assets/rewind.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import fastforward from "../assets/fast-forward.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
  return <div id="play-controls" className="w-100 flex justify-between -mt-64">
    <button className="w-4 text-lg text-(--color-text) font-(--font-sans)">1x</button>
    <button className="w-6"><svg className="stroke-(--color-text)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rewind-icon lucide-rewind"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></svg></button>
    <button className="w-12 h-12 flex border-(--color-text) justify-center border-solid border-2 rounded-md items-center self-center"><svg xmlns="http://www.w3.org/2000/svg" className="flex flex-self stroke-(--color-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg></button>
    <button className="w-6"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-(--color-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fast-forward-icon lucide-fast-forward"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg></button>
    <button className="w-6"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-(--color-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shuffle-icon lucide-shuffle"><path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/></svg></button>
  </div>
}
