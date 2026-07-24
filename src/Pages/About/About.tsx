import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-header">
        <h1>About Loditojo Gadgets</h1>
        <p>Premium Gadgets. Trusted Technology.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Loditojo Gadgets is a trusted technology store committed to
            providing authentic smartphones, laptops, smart devices, gaming
            accessories and premium gadgets to customers across Nigeria.
          </p>
          <p>
            Our mission is simple — make premium technology accessible,
            reliable and affordable while delivering an exceptional customer
            experience.
          </p>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h3>Authenticity</h3>
            <p>100% genuine products from trusted brands.</p>
          </div>

          <div className="value-card">
            <h3>Fast Delivery</h3>
            <p>Reliable nationwide delivery.</p>
          </div>

          <div className="value-card">
            <h3>Customer Support</h3>
            <p>We're here before and after every purchase.</p>
          </div>

          <div className="value-card">
            <h3>Best Prices</h3>
            <p>Competitive pricing without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;