import Hero from "../components/Hero/Hero";
import Products from "../components/Cards/FeaturedProducts";
import Topwave from "../components/Wave Dividers/Top-Wave";
import Botwave from "../components/Wave Dividers/Bot-Wave";
import MidWave from "../components/Wave Dividers/Mid-Wave";
import Learn from "../components/Sections/LearnAboutUs";
import ChooseUs from "../components/Sections/ChooseUs";
import Testimonials from "../components/Sections/Testimonials";
export default function Home() {
  return (
    <>
      <MidWave />
      <Hero />
      <Topwave />
      <ChooseUs />
      <Botwave />
      <Testimonials />
      <Topwave />
      <Products />
      <Botwave />
      <Learn />
      <Topwave />
    </>
  );
}
