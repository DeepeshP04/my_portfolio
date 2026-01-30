import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-description">
            I’m currently looking for new opportunities. Whether you have a 
            question or just want to say hi, I’ll try my best to get back to you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Agra, India</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>yourname@example.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="How can I help you?" required></textarea>
          </div>
          <button type="submit" className="primary-btn submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;