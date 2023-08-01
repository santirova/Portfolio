import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to='projects' smooth={true} duration={500}>Proyects</Link></li>
        <li><Link to='skills' smooth={true} duration={500}>Tech skills</Link></li>
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav> 
  )
}

export default Navbar