import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-glow" />

      <div className="footer-container">
        <motion.a
          href="#home"
          className="footer-brand"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Praniga<span>.</span>
        </motion.a>

        <p className="footer-tagline">
          Learning, building, and creating with purpose.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Praniga16"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/praniga-b-935995338/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={19} />
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {year} Praniga. All rights reserved.</p>

          <p className="footer-made">
            Made with <Heart size={14} /> and curiosity.
          </p>

          <a
            className="footer-top"
            href="#home"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}