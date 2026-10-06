import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Globe,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 size={22} />,
    title: "Programming",
    skills: [
      "Python",
      "Java",
      "C",
      "Data Structures & Algorithms",
    ],
  },
  {
    icon: <Brain size={22} />,
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Generative AI",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    icon: <Globe size={22} />,
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Django",
      "FastAPI",
    ],
  },
  {
    icon: <Database size={22} />,
    title: "Data & Databases",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "REST APIs",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            02 — SKILLS
          </span>

          <h2>
            Technologies I use to
            <span> build and learn.</span>
          </h2>

          <p className="skills-intro">
            A growing technical toolkit built through coursework,
            projects and hands-on experimentation.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="skill-card-header">

                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>{group.title}</h3>

              </div>

              <div className="skill-list">

                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    className="skill-pill"
                    key={skill}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index * 0.1 +
                        skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;