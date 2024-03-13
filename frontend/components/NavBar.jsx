"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const [activeTab, setActiveTab] = useState("")

  const pathname = usePathname()
  console.log(pathname)

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('user');
    setSessionUser(null);

    alert("You have successfully logged out!");
  }

  useEffect(() => {
    if (pathname.includes('/schedule') || pathname.includes('/registration')) {
      setActiveTab("classes");
    } else if (pathname.startsWith('/about')) {
      setActiveTab("about");
    } else if (pathname.startsWith('/media-gallery')) {
      setActiveTab('media-gallery')
    } else if (pathname.startsWith('/services')) {
      setActiveTab("services");
    } else {
      setActiveTab("")
    }
  }, [pathname]); 

  return (

    <div className={`bg-black bg-opacity-30 text-cream h-28 flex items-center justify-between px-8 m-0 p-0 sticky top-0 z-[20]`}>
      {/* Logo / Dance Studio Title */}
      <div className=" flex items-center">
        <div className="flex items-center mr-2">
          <Image className=" rounded-lg" src={Logo} alt="Priyada Arts Logo" width={50} height={50} />
        </div>
        <div className="text-3xl font-bold"><Link href="/">Priyada Arts</Link></div>
      </div>

      {/* NavLinks */}
      <div className="flex space-x-8 items-center">

        <nav className={`text-2xl ${activeTab === 'about' ? 'border-b-4 border-purple-200' : ''}`}>
          <Link href="/about/artist">About</Link>
        </nav>
        {/* Class Schedule / Registration Drop Down Menu */}
        <nav onMouseEnter={() => setToggleClassMenu(true)} 
          onClick={() => {
            setToggleClassMenu(!toggleClassMenu)
          }} 
          className=" bg-inherit text-2xl flex gap-2 cursor-pointer"
        >
        <span  className={`text-2xl ${activeTab ==='classes' ? 'border-b-4 border-purple-200' : ''}`}>Classes</span>
        {
            toggleClassMenu && (
              <div
                onMouseLeave={() => setToggleClassMenu(false)}
                className="absolute transition ease-in-out delay-500 z-30 top-16 mt-2 w-[160px] mx-auto rounded-md shadow-lg "
              >
                <div className="px-6 text-cream py-4 rounded-md flex flex-col gap-2 bg-gray-800">
                  <Link href="/schedule" className="sm:text-md lg:text-xl hover:text-stone-400 ">Schedule</Link>
                  <Link href="/registration" className="sm:text-md lg:text-xl hover:text-stone-400  ">Registration</Link>
                </div>
              </div>
            )
          }
        </nav>

        <nav className={`text-2xl ${activeTab ==='media-gallery' ? 'border-b-4 border-purple-200' : ''}`}>
          <Link href="/media-gallery">Awards / Gallery</Link>
        </nav>

        <nav className={`text-2xl ${activeTab ==='services' ? 'border-b-4 border-purple-200' : ''}`}>
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
            <span className="text-2xl">
              {sessionUser.firstName} {sessionUser.lastName}
            </span>

            {toggleProfile && (
              <div
                onMouseEnter={() => setToggleProfile(true)}
                onMouseLeave={() => setToggleProfile(false)}
                className="absolute z-10 top-16 w-[180px] rounded-md shadow-lg delay-200"
                >
                <div className="px-6 py-4 rounded-md bg-gray-800 flex flex-col gap-2 justify-start items-start">

                    {sessionUser.authorization === 'admin' ? <Link href='/admin'>Admin Portal</Link>:null}
                    <Link href="/your-account">Account</Link>
                  <button
                    onClick={handleLogout}
                    className="text-cream hover:text-stone-400"
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
            <span className="text-xl sm:text-xl lg:text-2xl hover:text-stone-400">Login / Sign Up</span>
            {toggleMenu && (
              <div className="absolute z-10 top-16 mt-2 w-[180px] rounded-md shadow-lg">
                <div className="px-6 py-4 rounded-md bg-stone-800 flex flex-col gap-2">
                  <Link href="/signup" className="text-cream sm:text-md lg:text-xl hover:text-stone-400">
                    Sign Up
                  </Link>
                  <Link href="/login" className="text-cream sm:text-md lg:text-xl hover:text-stone-400">
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
