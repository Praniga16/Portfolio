import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        PRANIGA<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-socials">

        <a
          href="https://github.com/Praniga16"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={19} />
        </a>

        <a
          href="https://www.linkedin.com/in/praniga-b-935995338/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={19} />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;