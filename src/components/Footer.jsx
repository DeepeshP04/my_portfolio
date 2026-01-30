import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Deepesh<span>.</span></h2>
            <p>Full Stack Developer specializing in high-quality web experiences.</p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/deepesh-pratap/" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://github.com/DeepeshP04" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Deepesh Pratap. All rights reserved.</p>
          <button 
            className="back-to-top" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;