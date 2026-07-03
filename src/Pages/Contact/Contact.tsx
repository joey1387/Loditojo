import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-header">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            📍 Benin City, Edo State, Nigeria
          </p>

          <p>
            📞 +234 XXX XXX XXXX
          </p>

          <p>
            ✉️ support@loditojogadgets.com
          </p>

          <p>
            🕒 Monday - Saturday | 8:00 AM - 6:00 PM
          </p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
          />

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;