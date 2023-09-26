
import { IconSun, IconMoon} from '@tabler/icons-react';

const Nav_Themes = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className="mx-8  2 w-7 h-7 "
      onClick={toggleDarkMode}
    >
      {darkMode ? <IconSun /> : <IconMoon/>}
    </button>
  );
};

export default Nav_Themes;
