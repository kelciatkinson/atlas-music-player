import React from "react";

interface PlayListItemProps {
  title: string;
  artist: string;
  duration: number;
  isActive?: boolean;
  onClick?: () => void;
}
export default function PlayListItem({ title, artist, duration, isActive, onClick }: PlayListItemProps) {
  // duration is in seconds
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration) % 60;
  let stringMinutes;
  let stringSeconds;
  console.log("Minutes: ", minutes);

  if (minutes < 10) {
    stringMinutes = minutes.toString();
    stringMinutes = `0${stringMinutes}`;
  } else {
    stringMinutes = minutes.toString();
  }
  if (seconds < 10) {
    stringSeconds = seconds.toString();
    stringSeconds = `0${stringSeconds}`;
  } else {
    stringSeconds = seconds.toString();
  }

  console.log(`${title} isActive`, isActive);
  return <div className="space-y-1">
    <div onClick={onClick} className={`group flex justify-between ${isActive ? 'bg-orange-200' : ''} hover:opacity-50 transition duration-300 ease-in-out px-0.25 pb-0.5 rounded-lg`}>
      <div>
        <p className="font-medium text-(--color-text) group-hover:text-(--color-text) transition duration-300 ease-in-out">{title}</p>
        <p className="font-medium text-sm text-(--color-secondary) group-hover:text-(--color-text) transition duration-300 ease-in-out pb-1">{artist}</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) group-hover:text-(--color-text) transition duration-300 ease-in-out">{stringMinutes}:{stringSeconds}</p>
    </div>
  </div>
}
