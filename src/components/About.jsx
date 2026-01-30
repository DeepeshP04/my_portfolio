import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-container">
        {/* Left Side: Content */}
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            I’m a <strong>Full-Stack Web Developer</strong> with hands-on experience building modern,
            responsive, and scalable web applications. I enjoy working across the
            stack — from crafting clean user interfaces to designing efficient
            backend systems.
          </p>
          <p className="about-text">
            I focus on writing maintainable code, solving real-world problems, and
            continuously improving my skills by building and shipping projects.
          </p>

          <div className="about-actions">
            <a href="/Deepesh_Pratap_CV.pdf" download className="primary-btn">
              Download CV
            </a>
            <a href="#portfolio" className="secondary-btn">
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="about-stats-grid">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-card">
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>Modern</h3>
            <p>Tech Stack</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;