import React from "react";


interface SongTitleProps {
  title: string;
  artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
  return (
    <div className="w-100 -mt-68 font-(--font-sans)">
      <p className="h-7 text-2xl font-bold text-(--color-text) dark:text-(--color-dark-text)">{title}</p>
      <p className="pt-2 text-(--color-secondary) dark:text-(--color-dark-secondary)">{artist}</p>
    </div>
  );
}
