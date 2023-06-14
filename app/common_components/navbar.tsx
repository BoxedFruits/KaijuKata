import Image from 'next/image';
import SideMenu from './sidemenu/sidemenu';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-full flex justify-between p-1">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href="#" className="flex items-center">
            <Image className="mr-3" src="/kaijuKingzLogo.webp" alt="KaijuKata Logo" width={35} height={35} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KaijuKata</span>
          </a>
        </div>
        <div className="flex w-full md:w-auto items-center mr-5" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mb-0">
            <li className="mr-2">
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Connect</a>
            </li>
            <li className="mr-5">
              <SideMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;