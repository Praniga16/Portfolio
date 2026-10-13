import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Rocket,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning, deep learning, and AI-powered applications.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical applications with Python, Java, and modern web technologies.",
  },
  {
    icon: Database,
    title: "Data & Problem Solving",
    description:
      "Strengthening logical thinking and developing data-driven solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Applying new concepts through hands-on projects and experimentation.",
  },
];

const skills = [
  "Python",
  "Java",
  "Machine Learning",
  "Deep Learning",
  "Django",
  "FastAPI",
  "Data Structures",
  "Web Development",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">GET TO KNOW ME</span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            Curious by nature. Driven by technology. Focused on building
            meaningful solutions.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <span className="about-intro-label">
              <GraduationCap size={17} />
              AI & DATA SCIENCE ENGINEERING STUDENT
            </span>

            <h3>
              Turning curiosity into
              <span> meaningful projects.</span>
            </h3>

            <p>
              I'm Praniga, an Artificial Intelligence and Data Science
              engineering student passionate about applying technology
              to real-world problems. I enjoy exploring intelligent
              systems and turning what I learn into practical applications.
            </p>

            <p>
              My interests include machine learning, AI-powered
              applications, and full-stack development. Each project
              helps me strengthen my programming, problem-solving,
              and software development skills.
            </p>

            <p>
              My long-term goal is to become an AI Engineer and build
              useful, reliable, and thoughtfully designed intelligent
              solutions.
            </p>

            <div className="about-goal">
              <span className="about-goal-icon">
                <Target size={20} />
              </span>

              <div>
                <strong>My Career Goal</strong>
                <p>
                  Create practical AI solutions that connect innovation
                  with everyday needs.
                </p>
              </div>
            </div>

            <div className="about-skills">
              <h4>TECHNICAL SKILLS & INTERESTS</h4>

              <div className="about-skill-list">
                {skills.map((skill, index) => (
                  <motion.span
                    className="about-skill-tag"
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="about-cards">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  className="about-card"
                  key={area.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="about-card-icon">
                    <Icon size={23} />
                  </div>

                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </motion.article>
              );
            })}

            <motion.div
              className="about-note"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Lightbulb size={19} />

              <p>
                Every project is a chance to learn, experiment, and
                build something better.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}