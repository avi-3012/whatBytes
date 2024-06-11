import { Inter } from "next/font/google";
import Header from "@/components/header";
import SideMenu from "@/components/sidemenu";
import { useState } from "react";
import SkillTestContent from "@/components/skillTest";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main
    className={`max-w-[1440px] mx-auto flex flex-col ${menuOpen ? 'overflow-hidden h-[100vh]' : 'overflow-auto'}`}
    >
      <Header isOpen={menuOpen} toggleMenu={setMenuOpen}/>
      <div className={`w-full flex flex-row ${menuOpen ? 'overflow-hidden h-[100vh]' : 'overflow-auto'}`}>
          <SideMenu menuOpen={menuOpen} toggleMenu={setMenuOpen}/>
        <div className="grow">
          <SkillTestContent />
        </div>
      </div>
    </main>
  );
}
