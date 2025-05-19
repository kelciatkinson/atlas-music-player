export default function PlayListItem() {
  return <div className="w-100 h-140">
    <p className="font-bold text-lg px-0.25">Playlist</p>
    <div className="space-y-1">
      <div className="flex justify-between bg-(--color-light-blue) px-0.25 pb-0.5">
        <div>
          <p className="font-medium">Painted in Blue</p>
          <p className="font-medium text-sm text-(--color-grey) pb-1">Soul Canvas</p>
        </div>
        <p className="self-center font-medium text-sm text-(--color-grey)">5:55</p>
      </div>
      <div className="flex justify-between px-0.25 pb-0.5">
        <div className="">
          <p className="font-medium">Title Drift</p>
          <p className="font-medium text-sm text-(--color-grey) pb-1">Echoes of the Sea</p>
        </div>
        <p className="self-center font-medium text-sm text-(--color-grey)">8:02</p>
      </div>
    </div>
  </div>
}