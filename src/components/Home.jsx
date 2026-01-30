import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="section home">
      <h1 className="main-heading one">Full Stack</h1>
      <h1 className="main-heading two">Developer</h1>

      <p className="home-subtitle">
        Building modern, scalable, and user-centric web applications.
      </p>

      <div className="skills-section">
        {["HTML/CSS", "JavaScript", "React", "Python", "MySQL"].map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="more-section">
        <a href="#portfolio" className="primary-btn">View Projects</a>
        <a href="#contact" className="secondary-btn">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;
