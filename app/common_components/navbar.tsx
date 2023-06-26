import Image from "next/image";
import SideMenu from "./sidemenu/sidemenu";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-full flex justify-between p-1">
        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href="#" className="flex items-center">
            <Image className="mr-3" src="/kaijuKingzLogo.webp" alt="KaijuKata Logo" width={35} height={35} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KaijuKata</span>
          </a>
        </div>
        <div className="flex w-auto items-center mr-5" id="navbar-default">
          <ul className="font-medium flex mb-0 border-gray-100 rounded-lg flex-row space-x-8 border-0 bg-white dark:bg-gray-900 dark:border-gray-700">
            <li className="mr-2">
              <a href="#" className="block pl-3 pr-4 bg-blue-700 rounded bg-transparent text-blue-700 p-0 dark:text-blue-500">Connect</a>
            </li>
            <li className="mr-5">
              <SideMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;