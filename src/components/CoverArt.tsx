// import placeholder from "../assets/placeholder.svg";
// import music from "../assets/music.jpg";
import React, { useEffect, useState } from "react";


interface CoverArtProps {
  cover: string;
  songId?: string;
}

export default function CoverArt({ cover, songId }: CoverArtProps) {
  const [lyrics, setLyrics] = useState<string>("");
  const [showLyrics, setShowLyrics] = useState<boolean>(false);


  const fetchLyrcis = async () => {
    if (!songId) return;
    try {
      const res = await fetch(`/api/v1/lyrics/${songId}`);
      const data = await res.json();

      setLyrics(data.lyrics);
    } catch (error) {
      setLyrics("Lyrics not available.");
    }
  };

  // const handleHover = () => {
  //   if (songId) {
  //     fetchLyrcis();
  //   }
  //   setShowLyrics(true);
  // }
  // onMouseEnter={handleHover} 
   // onMouseLeave={() => setShowLyrics(false)}
   // {showLyrics && songId && (
  //  <div>
  //  {lyrics}
  //</div>
// )}
  console.log("Cover URL:", cover);

  return <div className="pb-5">
    <img src={cover} alt="cover art" className="block w-100 rounded-lg"></img>
  </div>
}
