import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
        <div className="grid-overlay"></div>

      {/* Animated background elements */}
      <motion.div
        className="orb orb-one"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="orb orb-two"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Praniga B
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          AI/ML Engineer <span>in Progress.</span>
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >
          I build intelligent applications by combining
          Artificial Intelligence, Machine Learning, Data Science
          and modern software development.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
        >

          <motion.a
            href="#projects"
            className="primary-button"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Explore My Work
            <ArrowDown size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/Praniga16"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FaGithub size={18} />
            GitHub
          </motion.a>

        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >

          <a
            href="https://github.com/Praniga16"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/praniga-b-935995338/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

        </motion.div>

      </motion.div>
      <div className="hero-image-placeholder">
  <div className="hero-placeholder-inner">
    <span>YOUR PHOTO</span>
    <small>Profile Image</small>
  </div>
</div>

      {/* Animated scroll indicator */}
      <motion.div
        className="hero-scroll"
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Scroll to explore ↓
      </motion.div>

    </section>
  );
}

export default Hero;