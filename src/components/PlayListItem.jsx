export default function PlayListItem({title, artist, length}) {
  return <div className="space-y-1">
    <div className="group flex justify-between hover:bg-(--color-accent) transition duration-300 ease-in-out dark:bg-(--color-dark-accent) px-0.25 pb-0.5 rounded-lg">
      <div>
        <p className="font-medium text-(--color-text) group-hover:text-(--color-text) transition duration-300 ease-in-out dark:text-(--color-text)">Painted in Blue</p>
        <p className="font-medium text-sm text-(--color-secondary) group-hover:text-(--color-text) transition duration-300 ease-in-out dark:text-(--color-dark-secondary) pb-1">Soul Canvas</p>
      </div>
      <p className="self-center font-medium text-sm text-(--color-secondary) group-hover:text-(--color-text) transition duration-300 ease-in-out dark:text-(--color-text)">5:55</p>
    </div>
  </div>
}
