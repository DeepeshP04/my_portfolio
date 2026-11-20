import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Fithub",
      desc: "A responsive sports and rehab website.",
      tech: ["React", "CSS3", "Javascript", "Express"],
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=85",
      link: "https://fithub-taupe-alpha.vercel.app/",
      github: ""
    },
    {
      id: 2,
      title: "Elevate Physio",
      desc: "A one page responsive physiotherapist clinic site.",
      tech: ["React", "CSS3", "Javascript"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
      link: "https://elevate-physio-clinic.vercel.app/",
      github: "https://github.com/DeepeshP04/elevate-physio-clinic"
    },
    {
      id: 3,
      title: "MotionCare",
      desc: "A responsive physiotherapist clinic site.",
      tech: ["React", "CSS3", "Javascript"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      link: "https://motioncare-physio-liart.vercel.app/",
      github: "https://github.com/DeepeshP04/motioncare-physio"
    },
    {
      id: 4,
      title: "GoBravo - Bravo Cleaning Services",
      desc: "A modern responsive cleaning services website.",
      tech: ["Vue.js", "Javascript", "CSS"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://1000701.site.guru/"
    },
    {
      id: 5,
      title: "Kesar - Restaurant Website",
      desc: "A modern responsive restaurant website.",
      tech: ["React", "Javascript", "CSS"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://restaurant-website-dp-2fe0.vercel.app/",
      github: "https://github.com/DeepeshP04/restaurant-website"
    },
    {
      id: 6,
      title: "Qwikmall - E-Commerce Platform",
      desc: "Full-stack shop.",
      tech: ["React", "Python", "MySQL"],
      image: "https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://qwikmall-ecommerce-platform.vercel.app/",
      github: "https://github.com/DeepeshP04/Qwikmall-Ecommerce-Platform"
    },
    {
      id: 7,
      title: "Ryde - Cab Booking",
      desc: "Book Rides with ease.",
      tech: ["JavaScript", "Vue.js", "CSS3", "MySQL", "Node.js"],
      image: "https://images.unsplash.com/photo-1659493430477-3750838e3d61?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://1000672.site.guru/",
      github: ""
    },
    {
      id: 8,
      title: "Aster Café",
      desc: "A responsive cafe website frontend.",
      tech: ["React", "CSS3", "Javascript"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      link: "https://cafe-site-jet-kappa.vercel.app/",
      github: "https://github.com/DeepeshP04/cafe-site"
    },
    // {
    //   id: 3,
    //   title: "GroceryGo - Grocery App",
    //   desc: "Live market data tracking with Chart.js.",
    //   tech: ["Vue.js", "Javascript", "MySQL", "CSS3", "Node.js"],
    //   image: "https://plus.unsplash.com/premium_vector-1749566933816-4502bb01c7d6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   link: "https://1000573.site.guru/",
    //   github: ""
    // },
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
                      {project.github && (
  <a href={project.github} target="_blank" rel="noreferrer">
    Code
  </a>
)}

{project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="demo-btn"
  >
    Live Demo
  </a>
)}
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