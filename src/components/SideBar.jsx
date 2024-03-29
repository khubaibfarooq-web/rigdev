import { NavLink } from "react-router-dom";

const SideBar = ({ isOpen }) => {


    const LinkClass = ({ isActive }) =>
        isActive ?
            'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            : 'text-veryLightGrey hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <div className={`z-10 bg-dullBlack  rounded-tr-[12px] fixed top-[58px] left-0 bottom-0 w-[300px] p-6 transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <h1 className="text-white text-lg font-semibold mb-4">Sidebar</h1>
            <ul>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/">
                        Home
                    </NavLink>
                </li>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/pricing">
                        Pricing
                    </NavLink>
                </li>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/about">
                        About
                    </NavLink>
                </li>
                <li className="mb-[15px]">
                    <NavLink className={LinkClass} to="/community">
                        Community
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
