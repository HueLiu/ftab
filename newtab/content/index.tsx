// Main Content Area
const Content: React.FC = () => {
  return (
    <div className="lg:pl-60 dark:pintree-bg-gray-900 flex flex-col min-h-screen">
      <div
        className="items-center justify-between sticky top-0 z-40 flex h-16 shrink-0 gap-x-4 border-b border-gray-200 dark:pintree-border-gray-800 bg-white dark:pintree-bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="h-full items-center flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between">
          <div className="flex gap-x-4 justify-between">
            <img className="pl-2 h-8 w-auto lg:hidden" src="assets/logo.svg" alt="Pintree" />
            <div className="hidden lg:block relative w-72 h-full items-center justify-between">
              <button id="searchButton" className="absolute h-full text-gray-400 rounded">
                <svg className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <input id="searchInput" type="search"
                className="text-sm text-gray-900 dark:text-gray-400 pl-8 h-full border-0 focus:outline-none focus:ring-0 dark:pintree-bg-gray-900"
                placeholder="Search..." />
              <button id="clearSearchButton" className="text-sm text-gray-500 mr-4 rounded hidden">Clear</button>
            </div>
          </div>
          <a href="" className="lg:hidden ml-4 font-extrabold text-2xl dark:text-white">Pintree</a>
          <div className="relative">
            <button id="themeToggleButton" type="button" aria-label="Switch theme"
              className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:pintree-bg-gray-900 dark:ring-white/10 dark:hover:ring-white/20">
              <svg id="sunIcon" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
                <path
                  d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z">
                </path>
                <path
                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                  fill="none"></path>
              </svg>
              <svg id="moonIcon" viewBox="0 0 24 24" aria-hidden="true"
                className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <main className="mt-4 dark:pintree-bg-gray-900 flex-grow">
        <div id="loading-spinner" className="flex justify-center items-center h-full">
          <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-6 w-6"></div>
        </div>
        <div id="breadcrumbs" className="mt-2 px-6 text-sm text-gray-400 flex justify-between items-center">
          <div id="breadcrumbs-path" className="">
          </div>
        </div>
        <div id="bookmarks" className="grid gap-6 p-6">
        </div>
      </main>

      <footer className="bg-white w-full dark:pintree-bg-gray-900">
        <div className="mx-auto px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://x.com/pintree_io" target="_blank" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">X</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
              </svg>
            </a>
            <a href="https://github.com/Pintree-io/pintree" target="_blank" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400 flex justify-center items-center">
              &copy; <span id="currentYear"></span>&nbsp;Built with
              <a href="https://pintree.io" className="text-green-600 hover:text-green-500 flex items-center ml-1"
                target="_blank">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-1">
                  <g clip-path="url(#clip0_421_47774)">
                    <path d="M4.27777 9.11133H6.6111V12.0002L5.44444 10.8783L4.27777 12.0002V9.11133Z" fill="#FCB11E" />
                    <path
                      d="M9.05557 5.72222L5.22223 0L1.3889 5.72222H2.68634L0.444458 9.11111H10L7.75813 5.72222H9.05557Z"
                      fill="#2D9C6C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_421_47774">
                      <rect width="9.55556" height="12" fill="white" transform="translate(0.444458)" />
                    </clipPath>
                  </defs>
                </svg>
                Pintree
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Content;
