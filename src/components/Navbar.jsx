import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import dvoskin from "../assets/profileImage/dvoskin.jpg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    // console.log(html.classList[0])
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <main className="flex flex-row justify-between items-center bg-white w-full h-16 text-black fixed border-b-4 border-solid border-black">
      <button onClick={() => scroll.scrollToTop()}>
        <div className="flex items-center ml-8">
          <img className="w-10 h-10 mr-2 rounded-full" src={dvoskin} alt="Dvoskin" />
          <span>GASTÓN DVOSKIN</span>
        </div>

      </button>
      <div className="flex items-center mr-8">
        <Link
          className="px-7 cursor-pointer"
          to="about"
          smooth={true}
          duration={500}
        >
          ABOUT
        </Link>
        <Link
          className="px-7 cursor-pointer"
          to="projects"
          smooth={true}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          className="px-7 cursor-pointer"
          to="skills"
          smooth={true}
          duration={500}
        >
          TECHNOLOGIES
        </Link>
        <Link
          className="px-7 cursor-pointer"
          to="contact"
          smooth={true}
          duration={500}
        >
          CONTACT
        </Link>
        <button
          className="rounded-full bg-mybg2 w-10 h-10 dark:bg-mybg1d"
          onClick={toggleDarkMode}
        >
          {darkMode ? <div>☀️</div> : <div>☾</div>}
        </button>
      </div>
    </main>
  );
};

export default Navbar;
