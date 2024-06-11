import React, { useState } from "react";
import Header from "../components/header";
import SideMenu from "../components/sidemenu";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main
      className={`max-w-[1440px] mx-auto flex flex-col ${
        menuOpen ? "overflow-hidden h-[100vh]" : "overflow-auto"
      }`}
    >
      <Header isOpen={menuOpen} toggleMenu={setMenuOpen} />
      <div
        className={`w-full flex flex-row ${
          menuOpen ? "overflow-hidden h-[100vh]" : "overflow-auto"
        }`}
      >
        <SideMenu menuOpen={menuOpen} toggleMenu={setMenuOpen} />
        <div className="grow">
          <div className="w-full h-full flex justify-center items-center">
            Coming Soon
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
