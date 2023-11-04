"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactUs from "./ContactUs";
import { UserGlobalState } from "@/context/UserContext";
import Logo from '../public/Logo.PNG';

//TODO #1 - Add Profile Icon
//TODO #2 - Add Logo
//TODO #3 - Dropdown Menus
//TODO #4 - Active NavLink
//TODO Transition About Dropdown Menu Timer

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleClassMenu, setToggleClassMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const { sessionUser, setSessionUser} = UserGlobalState()


  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('user');
    setSessionUser(null);

    alert("You have successfully logged out!");
  }

  console.log(sessionUser)


  return (

    <div className={`bg-black
                 bg-opacity-30 text-cream h-28 flex items-center justify-between px-8 m-0 p-0 sticky top-0 z-[20]`}>
      {/* Logo / Dance Studio Title */}
      <div className=" flex items-center">
        <div className="flex items-center mr-2">
          <Image className=" rounded-lg" src={Logo} alt="Priyada Arts Logo" width={50} height={50} />
        </div>
        <div className="text-2xl"><Link href="/">Priyada Arts</Link></div>
      </div>

      {/* NavLinks */}
      <div className="flex space-x-8 items-center">


        {/* Class Schedule / Registration Drop Down Menu */}
        <nav onMouseEnter={() => setToggleClassMenu(true)} onClick={() => setToggleClassMenu(!setToggleClassMenu)} className=" bg-inherit text-2xl flex gap-2 cursor-pointer">
        <span className="text-xl ">Classes</span>
        {
            toggleClassMenu && (
              <div
                onMouseLeave={() => setToggleClassMenu(false)}
                className="absolute transition ease-in-out delay-500 z-30 top-16 mt-2 w-[160px] mx-auto rounded-md shadow-lg "
              >
                <div className="px-6 text-white py-4 rounded-md flex flex-col gap-2 bg-gray-800">
                  <Link href="/schedule" className="sm:text-md lg:text-xl hover:text-emerald-400 ">Schedule</Link>
                  <Link href="/registration" className="sm:text-md lg:text-xl hover:text-emerald-400  ">Registration</Link>
                </div>
              </div>
            )
          }
        </nav>

        <nav className="text-xl">
          <Link href="/media-gallery">Awards / Gallery</Link>
        </nav>

        <nav className="text-xl">
          <Link href="/services">Services</Link>
        </nav>
{/* Profile or Login/Signup */}
        {sessionUser ? (
          <div
            onMouseEnter={() => setToggleProfile(true)}
            onMouseLeave={() => setToggleProfile(false)}
            onClick={() => setToggleProfile(!toggleProfile)}
            className="text-xl flex gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-l">
              {sessionUser.first_name} {sessionUser.last_name}
            </span>

            {toggleProfile && (
              <div 
                onMouseEnter={() => setToggleProfile(true)}
                onMouseLeave={() => setToggleProfile(false)}
                className="absolute z-10 top-16 w-[180px] rounded-md shadow-lg delay-200"
                >
                <div className="px-6 py-4 rounded-md bg-gray-800 flex flex-col gap-2 justify-start items-start">
                  {sessionUser.authorization === "admin" ? (
                    <Link className="text-white hover:text-emerald-400" href="/admin">Admin Portal</Link>
                  ) : (
                    <Link href="/your-account">Account</Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-emerald-400"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            onMouseEnter={() => setToggleMenu(true)}
            onMouseLeave={() => setToggleMenu(false)}
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-2xl flex gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xl">Login / Sign Up</span>
            {toggleMenu && (
              <div className="absolute z-10 top-16 mt-2 w-[180px] rounded-md shadow-lg">
                <div className="px-6 py-4 rounded-md bg-gray-800 flex flex-col gap-2">
                  <Link href="/signup" className="text-white hover:text-emerald-400">
                    Sign Up
                  </Link>
                  <Link href="/login" className="text-white hover:text-emerald-400">
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
