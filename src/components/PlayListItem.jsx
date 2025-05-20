export default function PlayListItem({title, artist, length}) {
  return <div className="space-y-1">
    <div className="flex justify-between bg-(--color-accent) px-0.25 pb-0.5 rounded-lg">
      <div>
        <p className="font-medium text-(--color-text)">Painted in Blue</p>
        <p className="font-medium text-sm text-(--color-secondary) pb-1">Soul Canvas</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary)">5:55</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text)">Title Drift</p>
        <p className="font-medium text-sm text-(--color-secondary) pb-1">Echoes of the Sea</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary)">8:02</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text)">Fading Shadows</p>
        <p className="font-medium text-sm text-(--color-secondary) pb-1">The Emberlight</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary)">3:01</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text)">Cosmic Drift</p>
        <p className="font-medium text-sm text-(--color-secondary) pb-1">Solar Flare</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary)">5:01</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text)">Urban Serenade</p>
        <p className="font-medium text-sm text-(--color-secondary) pb-1">Midnight Groove</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary)">4:54</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text)">Whispers in the Wind</p>
        <p className="font-medium text-sm text-(--color-secondary) pb-1">Rust & Rain</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary)">6:13</p>
    </div>
  </div>
}
