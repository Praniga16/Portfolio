import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  BarChart3,
  Rocket,
} from "lucide-react";

const aboutCards = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    text: "Exploring AI and machine learning to build practical solutions for real-world problems.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Building clean and user-friendly applications using modern web technologies.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    text: "Working with data to discover patterns, generate insights, and support better decisions.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    text: "Constantly learning new technologies and improving my skills through hands-on projects.",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">ABOUT ME</span>

          <h2>
            Turning curiosity into
            <span> meaningful technology.</span>
          </h2>
        </motion.div>

        <div className="about-content">

          {/* About Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I’m Praniga, a passionate and curious student interested in
              technology, artificial intelligence, and innovation. I enjoy
              learning new technologies and applying them to solve
              everyday problems.
            </p>

            <p>
              My interests include Artificial Intelligence, Machine Learning,
              Data Science, and web development. I enjoy turning ideas into
              practical applications and continuously improving my technical
              skills through hands-on projects.
            </p>

            <p>
              I believe that good technology should not only be powerful,
              but also simple, useful, and accessible to people.
            </p>
          </motion.div>

          {/* About Cards */}
          <div className="about-cards">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  className="about-card"
                  key={card.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <div className="about-card-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;