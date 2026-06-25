import Header from "./landing/components/Header";
import Hero from "./landing/components/Hero";
import Integrations from "./landing/components/Integrations";
import ProductShowcase from "./landing/components/ProductShowcase";
import AiAssistant from "./landing/components/AiAssistant";
import Modules from "./landing/components/Modules";
import Pricing from "./landing/components/Pricing";
import Testimonials from "./landing/components/Testimonials";
import FinalCta from "./landing/components/FinalCta";
import Footer from "./landing/components/Footer";

export default function Home() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Modules />
        <ProductShowcase />
        <AiAssistant />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
