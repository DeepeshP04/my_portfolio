import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Full-stack shop with Stripe integration.",
      tech: ["React", "Python", "MySQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80", // Replace with your project screenshots
      link: "",
      github: "https://github.com/DeepeshP04/Qwikmall-Ecommerce-Platform"
    },
    {
      id: 2,
      title: "Ryde - Cab Booking",
      desc: "Book Rides with ease.",
      tech: ["JavaScript", "Vue.js", "CSS3", "MySQL"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      link: "https://1000672.site.guru/",
      github: ""
    },
    {
      id: 3,
      title: "GroceryGo - Grocery App",
      desc: "Live market data tracking with Chart.js.",
      tech: ["Vue.js", "Javascript", "MySQL", "CSS3"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      link: "https://1000573.site.guru/",
      github: ""
    }
  ];

  const techStack = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    Backend: ["Python", "Node.js", "MySQL", "MongoDB", "Flask"],
    Tools: ["Git", "Github", "Postman", "Figma", "VS Code"]
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <p>{project.desc}</p>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">Code</a>
                      <a href={project.link} target="_blank" rel="noreferrer" className="demo-btn">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-details">
                <h3>{project.title}</h3>
                <div className="project-tech-tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <h2 className="section-title stack-title">Technical Toolkit</h2>
        <div className="tech-stack-container">
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className="tech-category">
              <h4>{category}</h4>
              <div className="tech-list">
                {skills.map(skill => (
                  <div key={skill} className="tech-item">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;