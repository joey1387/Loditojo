import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import ProductSection from "../../Components/ProductSection/ProductSection";
import Newsletter from "../../Components/Newsletter/Newsletter";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import CategorySection from "../../Components/CategorySection/CategorySection";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <CategorySection />
      <ProductSection />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;