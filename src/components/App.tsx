import React from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";


function App() {
  console.log("App component rendered");
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen bg-(--color-bg-2) dark:bg-(--color-dark-bg)">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
