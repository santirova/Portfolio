import { useState, useEffect } from "react";
import Nav_Logo from "./Nav_Logo";
import Nav_Themes from "./Nav_Themes";
import Nav_LinksContainerSmall from "./Nav_LinksContainerSmall";
import Nav_LinksContainerLarge from "./Nav_LinksContainerLarge";
import Nav_Bars from "./Nav_Bars";

import { nameRovaletti } from "../data/dataRovaletti/dataNav";
import logodark from "../assets/SR-logo.png";
import logowhite from "../assets/SR-logo-blanco.png";


const Navbar = () => {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(isDarkModeEnabled);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  const logo = darkMode ? logowhite : logodark

  const [renderedMenu, setRenderedMenu] = useState(false);
  const handleRenderMenu = () => {
    setRenderedMenu(!renderedMenu);
  };

  const NAV_TEXTS = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav className=" max-md:px-6 px-12 flex flex-row justify-between items-center shadow-lg bg-white w-full h-20 text-black fixed dark:bg-slate-900 dark:text-white">
      <Nav_Logo id="leftContainer" ownerImg={logo} ownerName={nameRovaletti} />

      <div id="rightContainer" className="flex flex-row relative">
        <Nav_LinksContainerSmall handleRenderMenu={handleRenderMenu} renderedMenu={renderedMenu} NAV_TEXTS={NAV_TEXTS} className="lg:hidden" />
        <Nav_LinksContainerLarge NAV_TEXTS={NAV_TEXTS} />
        <Nav_Bars renderedMenu={renderedMenu} handleRenderMenu={handleRenderMenu} />
        <Nav_Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
