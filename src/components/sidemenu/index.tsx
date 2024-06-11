// sidemenu for a dashboard

import React, { useEffect, useState } from "react";
import Link from "next/link";

// react-icons
import { BsHouse as HomeIcon } from "react-icons/bs";
// import { BsGear as SettingsIcon } from 'react-icons/bs';
import { BsGrid as DashboardIcon } from "react-icons/bs";
import { BsBoxArrowRight as LogoutIcon } from "react-icons/bs";
import { BsFileEarmark as DocumentIcon } from "react-icons/bs";

const SideMenu = ({ menuOpen, toggleMenu }:{menuOpen:boolean, toggleMenu:any}) => {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      setCurrentPath("dashboard");
    }
    if (window.location.pathname === "/") {
      setCurrentPath("");
    }
    if (window.location.pathname === "/internship") {
      setCurrentPath("internship");
    }
    if (window.location.pathname === "/logout") {
      setCurrentPath("logout");
    }
  }, []);
  return (
    <>    {menuOpen&&<button className="absolute z-[10] w-[100vw] h-[100vh] bg-black/10 top-0 left-0" onClick={()=>toggleMenu(false)}></button>}
    <div className={`${menuOpen?"absolute block md:relative top-0 bg-white z-[12]":"hidden md:block"} h-[100vh] w-[220px] border-r-[1px]`}>
      <div className="w-[200px] flex flex-col justify-between mt-12">
        <div className="flex flex-col text-slate-500 font-bold">
          <div
            className={`${
              currentPath === "dashboard"
                ? "text-blue-600 bg-slate-100 rounded-r-full"
                : ""
            }`}
          >
            <Link href="/dashboard" className="ml-6 my-4 flex flex-row gap-4 ">
              <HomeIcon className="h-5 w-5 text-black" /> Dashboard
            </Link>
          </div>
          <div
            className={`${
              currentPath === ""
                ? "text-blue-600 bg-slate-100 rounded-r-full"
                : ""
            }`}
          >
            <Link href="/" className="ml-6 my-4 flex flex-row gap-4">
              <DashboardIcon className="h-5 w-5 text-black" /> Skill Test
            </Link>
          </div>
          <div
            className={`${
              currentPath === "internship"
                ? "text-blue-600 bg-slate-100 rounded-r-full"
                : ""
            }`}
          >
            <Link href="/internship" className="ml-6 my-4 flex flex-row gap-4">
              <DocumentIcon className="h-5 w-5 text-black" /> Internship
            </Link>
          </div>
          <div
            className={`${
              currentPath === "logout"
                ? "text-blue-600 bg-slate-100 rounded-r-full"
                : ""
            }`}
          >
            <Link href="/logout" className="ml-6 my-4 flex flex-row gap-4">
              <LogoutIcon className="h-5 w-5 text-black" /> Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default SideMenu;
