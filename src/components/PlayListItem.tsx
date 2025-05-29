import React from "react";

interface PlayListItemProps {
  title: string;
  artist: string;
  duration: number;
  isActive?: boolean;
  onClick?: () => void;
}
export default function PlayListItem({ title, artist, duration, isActive, onClick }: PlayListItemProps) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration / 60) % 60;

  console.log(`${title} isActive`, isActive);
  return <div className="space-y-1">
    <div onClick={onClick} className={`group flex justify-between ${isActive ? 'bg-orange-200' : ''} hover:opacity-50 transition duration-300 ease-in-out px-0.25 pb-0.5 rounded-lg`}>
      <div>
        <p className="font-medium text-(--color-text) group-hover:text-(--color-text) transition duration-300 ease-in-out">{title}</p>
        <p className="font-medium text-sm text-(--color-secondary) group-hover:text-(--color-text) transition duration-300 ease-in-out pb-1">{artist}</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) group-hover:text-(--color-text) transition duration-300 ease-in-out">{hours}:{minutes}</p>
    </div>
  </div>
}
