import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Subsidy from './components/Subsidy';
import WhyChooseUs from './components/WhyChooseUs';
import Calculator from './components/Calculator';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-solar-orange selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Environmental & Financial Metrics Stats */}
      <Stats />

      {/* About Company Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Government Subsidy Section */}
      <Subsidy />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Interactive Savings Calculator */}
      <Calculator />

      {/* Completed Projects Showcase */}
      <Projects />

      {/* Customer Testimonials Carousel */}
      <Testimonials />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Contact Form & Direct Lead Gen CTAs */}
      <Contact />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
