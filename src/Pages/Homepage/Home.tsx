import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import ProductSection from "../../Components/ProductSection/ProductSection";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import CategorySection from "../../Components/CategorySection/CategorySection";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <Features />
      <CategorySection />
      <ProductSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;