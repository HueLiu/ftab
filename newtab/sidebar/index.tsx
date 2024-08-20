import { useRef } from "react";
import logo from "../assets/logo.svg";
import { ChangedTreeData } from "../lib/bookmarks";

// Static Sidebar for Desktop
const Sidebar: React.FC = () => {
  const navigationRef = useRef<HTMLUListElement>(null);

  const renderNavigation = (folders: ChangedTreeData[], isFirstRender = false, path = []) => {
    // navigationRef.current? = ''; // Clear previous content
    folders.forEach((folder, index) => {
      if (folder.type === 'folder') {
        const navItem = document.createElement('li');
        navItem.className = 'items-center group flex justify-between gap-x-3 rounded-md p-2 text-gray-700 dark:text-gray-400 hover:text-main-500 hover:bg-gray-50 dark:hover:pintree-bg-gray-800 bg-opacity-50';

        const navLinkContainer = document.createElement('div');
        navLinkContainer.className = 'flex items-center space-x-2 truncate';

        const folderIcon = document.createElement('span');
        folderIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 012-2h4l2 2h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>';

        const navLink = document.createElement('a');
        navLink.className = 'flex text-sm leading-6 font-semibold dark:text-gray-400';
        navLink.innerText = folder.title;

        navLinkContainer.appendChild(folderIcon);
        navLinkContainer.appendChild(navLink);

        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'ml-2 transform transition-transform';
        toggleIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>';

        navItem.appendChild(navLinkContainer);
        if (folder.children && folder.children.length > 0) {
          navItem.appendChild(toggleIcon);
        }
        container.appendChild(navItem);

        if (folder.children && folder.children.length > 0) {
          const subList = document.createElement('ul');
          subList.className = 'ml-4 space-y-2 hidden';
          renderNavigation(folder.children, subList, false, path.concat({ title: folder.title, children: folder.children }));
          container.appendChild(subList);

          if (isFirstRender && index === 0) {
            // Expand the first item on initial render
            subList.classList.remove('hidden');
            toggleIcon.classList.add('rotate-90');
          }

          navItem.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('#navigation .sidebar-active').forEach(el => el.classList.remove('sidebar-active'));
            navItem.classList.add('sidebar-active');
            subList.classList.toggle('hidden');
            if (subList.children.length > 0) {
              toggleIcon.classList.toggle('rotate-90');
            }
            renderBookmarks(folder.children, path.concat({ title: folder.title, children: folder.children }));
          };
        } else {
          navItem.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('#navigation .sidebar-active').forEach(el => el.classList.remove('sidebar-active'));
            navItem.classList.add('sidebar-active');
            renderBookmarks(folder.children, path.concat({ title: folder.title, children: folder.children }));
          };
        }
      }
    });
  }


  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      <div className="flex flex-col border-r border-gray-200 dark:pintree-border-gray-800 bg-white px-4 h-full font-semibold dark:pintree-bg-gray-900">
        <div className="flex p-0 h-16 shrink-0 items-center">
          <img className="pl-2 h-8 w-auto" src={logo} alt="FTab" />
          <a className="ml-4 font-extrabold text-2xl dark:text-white">FTab</a>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar p-1 cursor-pointer">
          <div id="sidebar" className="flex flex-1 flex-col">
            <ul ref={navigationRef} className="space-y-1"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
