import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Rocket,
} from "lucide-react";

const cards = [
  {
    icon: <Brain size={22} />,
    title: "AI & Machine Learning",
    text: "Exploring machine learning, deep learning and intelligent systems to solve real-world problems.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Software Development",
    text: "Building practical applications using Python, Django and modern development technologies.",
  },
  {
    icon: <Database size={22} />,
    title: "Data Science",
    text: "Working with data analysis, visualization and machine learning techniques to discover useful insights.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Problem Solving",
    text: "Strengthening programming and DSA skills while continuously learning and building new solutions.",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            01 — ABOUT ME
          </span>

          <h2>
            Turning curiosity into
            <span> real-world solutions.</span>
          </h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I'm Praniga, an Artificial Intelligence and Data
              Science engineering student with a strong interest
              in building intelligent and practical applications.
            </p>

            <p>
              I enjoy combining programming, machine learning and
              full-stack development to turn ideas into useful
              digital solutions. My current focus is on strengthening
              my foundations in AI, software development and
              problem solving.
            </p>

            <p>
              I believe in learning by building — experimenting with
              technologies, developing projects and continuously
              improving through real-world challenges.
            </p>
          </motion.div>

          <div className="about-cards">

            {cards.map((card, index) => (
              <motion.div
                className="about-card"
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="about-card-icon">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;