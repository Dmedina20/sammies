import Hero from "../components/Hero/Hero";
import Products from "../components/Cards/FeaturedProducts";
import Topwave from "../components/Wave Dividers/Top-Wave";
import Botwave from "../components/Wave Dividers/Bot-Wave";
import MidWave from "../components/Wave Dividers/Mid-Wave";
export default function Home() {
  return (
    <>
      <MidWave />
      <Hero />
      <Topwave />
      <Products />
      <Botwave />
      <div className="hero min-h-screen bg-primary overflow-y-hidden">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
