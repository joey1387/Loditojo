import "./Contact.css";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>📍 Enugu, Enugu State, Nigeria</p>
          <p>📞 +234 800 000 0000</p>
          <p>✉️ support@loditojogadgets.com</p>
          <p>🕒 Monday - Saturday | 8:00 AM - 6:00 PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="contact-success-msg">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;