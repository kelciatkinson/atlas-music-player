import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";


function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen bg-(--color-bg-2)">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
