import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-description">
            I’m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I’ll try my best to get back to
            you!
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
                <p>pratapdeepesh2@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/deepesh-pratap/"
              className="social-icon"
            >
              LinkedIn
            </a>
            <a href="https://github.com/DeepeshP04" className="social-icon">
              GitHub
            </a>
            <a href="#" className="social-icon">
              Twitter
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" type="text" placeholder="John Doe" required value={formData.name} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="How can I help you?"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
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
