export default function PlayListItem({title, artist, length}) {
  return <div className="space-y-1">
    <div className="flex justify-between bg-(--color-accent) dark:bg-(--color-dark-accent) px-0.25 pb-0.5 rounded-lg">
      <div>
        <p className="font-medium text-(--color-text) dark:text-(--color-text)">Painted in Blue</p>
        <p className="font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1">Soul Canvas</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)">5:55</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text) dark:text-(--color-dark-text)">Title Drift</p>
        <p className="font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary) pb-1">Echoes of the Sea</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary)">8:02</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text) dark:text-(--color-dark-text)">Fading Shadows</p>
        <p className="font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary) pb-1">The Emberlight</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary)">3:01</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text) dark:text-(--color-dark-text)">Cosmic Drift</p>
        <p className="font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary) pb-1">Solar Flare</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary)">5:01</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text) dark:text-(--color-dark-text)">Urban Serenade</p>
        <p className="font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary) pb-1">Midnight Groove</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary)">4:54</p>
    </div>
    <div className="flex justify-between px-0.25 pb-0.5">
      <div className="">
        <p className="font-medium text-(--color-text) dark:text-(--color-dark-text)">Whispers in the Wind</p>
        <p className="font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary) pb-1">Rust & Rain</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) dark:text-(--color-dark-secondary)">6:13</p>
    </div>
  </div>
}
