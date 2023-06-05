import Image from 'next/image';
import SideMenu from './sidemenu/sidemenu';

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                <a href="#" className="flex items-center">
                    <Image className="mr-3" src="/kaijuKingzLogo.webp" alt="KaijuKata Logo" width={35} height={35} />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KaijuKata</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Connect</a>
                        </li>
                        <li>
                            <SideMenu/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;