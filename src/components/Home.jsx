import "./Home.css";

const Home = () => {
  const skills = ["HTML/CSS", "JavaScript", "React", "Express", "Python", "MySQL"];

  return (
    <section id="home" className="section home">
      {/* Decorative background element */}
      <div className="home-glow"></div>

      <div className="home-content">
        <div className="badge">Available for Work</div>
        
        <h1 className="main-heading">
          <span className="text-gradient">Full Stack</span> 
          <br />
          <span className="text-outline">Developer</span>
        </h1>

        <p className="home-subtitle">
          I bridge the gap between complex backend logic and 
          <span> seamless user experiences.</span>
        </p>

        <div className="skills-section">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="more-section">
          <a href="#portfolio" className="primary-btn">
            View Projects
          </a>
          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;