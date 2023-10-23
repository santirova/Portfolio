import { IconSun, IconMoon} from '@tabler/icons-react';

const Nav_Themes = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className="justify-items-center ml-2 w-7 h-7 hover:text-myacc"
      onClick={toggleDarkMode}
    >
      {darkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default Nav_Themes;
