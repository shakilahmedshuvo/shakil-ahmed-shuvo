import { Link } from "react-router-dom";
import { FaHome, FaChalkboardTeacher, FaRegAddressBook } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

// nav item 
const navBarItems =
    <>
        <li className="text-lg">
            <a
                className="hover:text-blue-300 hover:text-2xl"
                href="#home">
                <FaHome /> Home
            </a>
        </li>
        <li className="text-lg">
            <a
                className="hover:text-blue-300 hover:text-2xl"
                href="#about">
                <BsInfoCircleFill /> About
            </a>
        </li>
        <li className="text-lg">
            <a
                className="hover:text-blue-300 hover:text-2xl"
                href="#projects">
                <FaChalkboardTeacher />Projects
            </a>
        </li>
        <li className="text-lg">
            <a
                className="hover:text-blue-300 hover:text-2xl"
                href="#contact">
                <FaRegAddressBook />Contact
            </a>
        </li>
    </>

const NavBar = () => {
    // dark mode toggler
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("business");
        }
        else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div
            className="font-bold fixed z-10 w-full bg-black">
            <div
                className="navbar text-white max-w-7xl mx-auto p-0">
                <div
                    className="navbar-start ">
                    <Link
                        to='/'
                        className="btn btn-ghost normal-case text-3xl font-bold text-center">
                        Shakil Ahmed<span
                            className="text-2xl font-normal relative top-3 right-1">
                            &#174;
                        </span>
                    </Link>
                </div>
                <div
                    className="navbar-center hidden lg:flex">
                    <ul
                        className="menu menu-horizontal px-1">
                        {navBarItems}
                    </ul>
                </div>
                <div
                    className="navbar-end font-bold">
                    {/* dark mode toggler start */}
                    <label
                        className="swap swap-rotate">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light"
                                ?
                                false : true} />
                        <div
                            className="swap-on">
                            <svg
                                className="fill-current w-8 h-8 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                        </div>
                        <div
                            className="swap-off">
                            <svg
                                className="fill-current w-8 h-8 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </div>
                    </label>
                    {/* dark mode toggler start */}
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden">
                            <HiOutlineMenuAlt3 className="text-3xl ms-3" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 relative right-0 bg-black">
                            {navBarItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;