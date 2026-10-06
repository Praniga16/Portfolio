import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "EcoSort AI",
    category: "Computer Vision / AI",
    description:
      "An AI-powered waste segregation system that classifies waste images into six categories and provides confidence-based disposal guidance.",
    technologies: [
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "Computer Vision",
      "Flask",
    ],
    github: "https://github.com/Praniga16/Ecosort",
    featured: true,
  },
  {
    number: "02",
    title: "SecurePass",
    category: "Web Application / Security",
    description:
      "A secure password management application that allows users to organize, manage and protect their credentials through a Django-based vault.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Praniga16/Secure-vault",
    featured: true,
  },
  {
    number: "03",
    title: "Personal To-Do",
    category: "Web Application",
    description:
      "A task management application designed to help users organize daily activities, manage priorities and track task progress efficiently.",
    technologies: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Praniga16/personal-to-do",
    featured: false,
  },
  {
    number: "04",
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description:
      "A content-based recommendation system that analyzes movie information and uses similarity techniques to recommend relevant movies.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],
    github: "#",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            03 — PROJECTS
          </span>

          <h2>
            Things I've built
            <span> while learning.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects where I turn concepts,
            technologies and ideas into practical applications.
          </p>
        </motion.div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <div className="project-body">

                <div className="project-title-row">

                  <h3>{project.title}</h3>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                  >
                    <ArrowUpRight size={25} />
                  </motion.div>

                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              <div className="project-footer">

                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <span className="github-text">GitHub</span>
                    View on GitHub
                  </a>
                ) : (
                  <span className="project-link disabled">
                    <span className="github-icon">GH</span>
                    Coming soon
                  </span>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-external"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink size={17} />
                </a>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;