import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.a
        href="#home"
        className="logo"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        PRANIGA<span>.</span>
      </motion.a>

      {/* Navigation */}
      <div className="nav-links">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.25 + index * 0.08,
            }}
            whileHover={{ y: -2 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="nav-socials">
        <motion.a
          href="https://github.com/Praniga16"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          whileHover={{
            y: -3,
            scale: 1.08,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FaGithub size={19} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/praniga-b-935995338/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          whileHover={{
            y: -3,
            scale: 1.08,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FaLinkedin size={19} />
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;