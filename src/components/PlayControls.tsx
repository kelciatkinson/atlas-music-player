import React, { useState } from "react";


interface PlayControlProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  isShuffled: boolean;
  handleShuffle: () => void;
}

export default function PlayControls({ onPrev, onNext, canGoPrev, canGoNext, isShuffled, handleShuffle }: PlayControlProps) {
  const [speed, setSpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleSpeed = () => {
    if (speed === 0.5) setSpeed(1);
    else if (speed === 1) setSpeed(2);
    else setSpeed(0.5);
  };

  const onPause = () => setIsPlaying(!isPlaying);


  return (
    <div id="play-controls" className="w-100 flex justify-between -mt-64">
      <button id="play-speed" onClick={handleSpeed} className="w-4 text-lg text-(--color-text) hover:text-(--color-dark-text) transition duration-300 ease-in-out dark:text-(--color-dark-text) font-(--font-sans)">{speed}x</button>
      <button id="rewind" onClick={onPrev} disabled={!canGoPrev} className="w-6"><svg className="stroke-(--color-text) hover:stroke-(--color-dark-text) transition duration-300 ease-in-out dark:stroke-(--color-dark-text)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></svg></button>
      <button id="play" onClick={onPause} className="group transition duration-300 ease-in-out w-12 h-12 flex  hover:border-(--color-dark-text) dark:border-(--color-dark-text) justify-center border-2 border-(--color-text) rounded-md items-center self-center">
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="flex flex-self stroke-(--color-text) group-hover:stroke-(--color-dark-text) transition duration-300 ease-in-out dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="flex flex-self stroke-(--color-text) group-hover:stroke-(--color-dark-text) transition duration-300 ease-in-out dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>
        )}</button>
      <button id="fast-forward" onClick={onNext} disabled={!canGoNext} className="w-6"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-(--color-text) hover:stroke-(--color-dark-text) transition duration-300 ease-in-out dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg></button>
      <button id="shuffle" onClick={handleShuffle} className="w-6"><svg xmlns="http://www.w3.org/2000/svg" className={`${isShuffled ? 'stroke-(--color-accent)' : 'stroke-(--color-text)'} hover:opacity-40 transition duration-300 ease-in-out dark:stroke-(--color-dark-text)`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/></svg></button>
    </div>
  );
}
