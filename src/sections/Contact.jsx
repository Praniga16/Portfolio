import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "Get in touch via email",
    href: "mailto:praniprani38@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Let's connect professionally",
    href: "https://www.linkedin.com/in/praniga-b-935995338/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/Praniga16",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const subjectText = form.get("subject");
    const message = form.get("message");

    const subject = encodeURIComponent(
      subjectText || `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:praniprani38@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's Build Something <span>Meaningful.</span>
          </h2>

          <p>
            Have an idea, an opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-top">
              <span className="contact-small-label">
                CONTACT DETAILS
              </span>

              <h3>Let's start a conversation.</h3>

              <p>
                I'm always interested in learning, collaborating, and
                exploring opportunities in AI and software development.
              </p>
            </div>

            <div className="contact-links">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      item.label === "Email" ? undefined : "noreferrer"
                    }
                    className="contact-link-card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.45,
                    }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="contact-icon">
                      <Icon size={21} />
                    </span>

                    <span className="contact-link-text">
                      <strong>{item.label}</strong>
                      <small>{item.value}</small>
                    </span>

                    <ArrowUpRight
                      className="contact-arrow"
                      size={19}
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="contact-availability">
              <span className="availability-dot" />
              <span>Open to learning and collaboration</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="form-heading">
              <span className="contact-small-label">
                SEND A MESSAGE
              </span>

              <h3>Tell me about your idea.</h3>
            </div>

            <div className="form-row">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
              />
            </label>

            <label>
              Your message
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </label>

            <button className="contact-submit" type="submit">
              <span>Send Message</span>
              <Send size={17} />
            </button>

            <p className="contact-form-note">
              Your email app will open with your message ready to send.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}