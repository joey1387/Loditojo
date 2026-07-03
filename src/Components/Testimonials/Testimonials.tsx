import "./Testimonials.css";

const testimonials = [
  {
    name: "David A.",
    location: "Lagos",
    review:
      "Excellent service! My iPhone arrived the next day and was 100% original.",
  },
  {
    name: "Esther O.",
    location: "Abuja",
    review:
      "Customer support was amazing. They helped me choose the perfect laptop.",
  },
  {
    name: "Michael E.",
    location: "Benin City",
    review:
      "I've ordered three times already. Fast delivery and trusted products every time.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonial-header">
        <p>TESTIMONIALS</p>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="stars">★★★★★</div>

            <p>"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.location}</span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonials;