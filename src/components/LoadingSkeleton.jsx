import music from "../assets/music.jpg";

export default function LoadingSkeleton() {
  return <div className="flex flex-col md:flex-row shadow-lg dark:shadow-(--color-dark-text) rounded-lg self-center w-4xl max-w-full bg-(--color-white) dark:bg-(--color-dark-bg-2)">
    <div className="h-160 p-8 flex flex-col justify-between items-center">
      <div className="pb-5 w-full h-100 rounded-lg bg-(--color-sk-grey)">
      </div>
      <div className="w-100 -mt-68 font-(--font-sans)">
        <p className="mt-5 h-7 w-50 bg-(--color-sk-grey)"></p>
        <p className="mt-2 pt-2 h-7 w-25 bg-(--color-sk-grey)"></p>
      </div>
      <div id="play-controls" className="w-100 flex justify-between -mt-64">
        <button className="w-4 text-lg  dark:text-(--color-dark-text) font-(--font-sans)">1x</button>
        <button className="w-6"><svg className=" dark:stroke-(--color-dark-text)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rewind-icon lucide-rewind"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></svg></button>
        <button className="w-12 h-12 flex  dark:border-(--color-dark-text) justify-center border-solid border-2 rounded-md items-center self-center"><svg xmlns="http://www.w3.org/2000/svg" className="flex flex-self stroke-(--color-text) dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg></button>
        <button className="w-6"><svg xmlns="http://www.w3.org/2000/svg" className="dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fast-forward-icon lucide-fast-forward"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg></button>
        <button className="w-6"><svg xmlns="http://www.w3.org/2000/svg" className="dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shuffle-icon lucide-shuffle"><path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/></svg></button>
      </div>
      <div className="w-100 h-4 flex items-center -mt-62">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:stroke-(--color-dark-text)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
        <input type="range" defaultValue="50" className="w-full accent-(--color-grey) dark:accent-(--color-dark-primary)"></input>
      </div>
    </div>
    <div className="h-0.25 w-full md:w-0.25 md:h-auto self-stretch bg-neutral-300"></div>
    <div className="w-full h-140 p-8 flex flex-col">
      <p className="font-bold text-lg px-0.25 pb-3 dark:text-(--color-dark-text)">Playlist</p>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-0.25 pb-2 rounded-lg">
          <div>
            <p className="h-5 w-30 bg-(--color-sk-grey) font-medium text-(--color-text) dark:text-(--color-text)"></p>
            <p className="mt-1 h-5 w-20 bg-(--color-sk-grey) font-medium text-sm text-(--color-text) dark:text-(--color-text) pb-1"></p>
          </div>
        <p className="w-8 h-5 bg-(--color-sk-grey) self-center font-medium text-sm text-(--color-text) dark:text-(--color-text)"></p>
        </div>
      </div>
    </div>
    
  </div>
}