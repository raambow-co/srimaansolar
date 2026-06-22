import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, BatteryCharging, Zap, Building2, Home, Wrench, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sun className="h-8 w-8 text-solar-orange" />,
      title: 'On-Grid Solar Systems',
      description: 'Connected directly to the state electricity grid. Export surplus power and reduce bills with net metering.',
      features: ['Maximize monthly savings', 'Eligible for government subsidies', 'Lowest initial investment cost', 'Minimal maintenance required'],
      gradient: 'from-solar-orange/10 to-transparent',
    },
    {
      icon: <BatteryCharging className="h-8 w-8 text-eco-green" />,
      title: 'Off-Grid Solar Systems',
      description: 'Independent system with heavy battery bank backup. Perfect for remote locations with frequent load shedding.',
      features: ['100% power independence', 'Continuous power during outages', 'Zero dependency on local DISCOMs', 'Excellent for farms and remote sites'],
      gradient: 'from-eco-green/10 to-transparent',
    },
    {
      icon: <Zap className="h-8 w-8 text-deep-blue" />,
      title: 'Hybrid Solar Systems',
      description: 'Best of both worlds. Combined grid-connected system with battery storage to protect against blackouts.',
      features: ['Smart grid-tie with backup', 'Automatic blackout protection', 'Control over peak tariff rates', 'Flexible scaling options'],
      gradient: 'from-deep-blue/10 to-transparent',
    },
    {
      icon: <Building2 className="h-8 w-8 text-solar-orange" />,
      title: 'Commercial Solar Solutions',
      description: 'Turn unused industrial rooftops into revenue-generating assets. Drastically cut operational costs.',
      features: ['Accelerated depreciation benefits', 'Massive reduction in tax liabilities', 'Corporate ESG carbon credits', 'High return on investment (ROI)'],
      gradient: 'from-solar-orange/10 to-transparent',
    },
    {
      icon: <Home className="h-8 w-8 text-eco-green" />,
      title: 'Residential Rooftop Solar',
      description: 'Tailored configurations for modern villas and apartments. Power home appliances cleanly and safely.',
      features: ['Subsidy assistance included', 'Up to 90% savings on bills', 'Increase property value', 'Net metering integration'],
      gradient: 'from-eco-green/10 to-transparent',
    },
    {
      icon: <Wrench className="h-8 w-8 text-deep-blue" />,
      title: 'Maintenance & AMC Services',
      description: 'Keep your solar assets running at peak efficiency. System health checkups, panel cleaning, and wire audits.',
      features: ['Scheduled panel cleaning', 'Performance optimization checks', 'Inverter diagnostics & repair', 'Annual Maintenance Contracts (AMC)'],
      gradient: 'from-deep-blue/10 to-transparent',
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = services.length - visibleCards;

  const nextSlide = () => {
    setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Dynamic graphic rings */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-solar-orange/10 pointer-events-none"></div>
      <div className="absolute -bottom-45 -right-40 w-96 h-96 rounded-full border border-eco-green/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-solar-orange/10 border border-solar-orange/20 px-3 py-1 rounded-full text-solar-orange font-bold text-sm">
            <span>Solar Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
            Our Core Solar Offerings
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            High-efficiency technology customized for homes, commercial complexes, and industrial warehouses in Telangana and Andhra Pradesh.
          </p>
        </div>

        {/* Services Cards Slider */}
        <div className="relative overflow-hidden py-4 px-2">
          <motion.div
            className="flex"
            animate={{ x: `-${slideIndex * (100 / visibleCards)}%` }}
            transition={{ type: 'spring', damping: 28, stiffness: 120 }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-4 flex"
              >
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 40px -15px rgba(15, 76, 129, 0.12)',
                  }}
                  className="relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-100 shadow-md transition-all duration-300 flex flex-col justify-between group w-full"
                >
                  {/* Radial gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon Box */}
                    <div className="p-4 bg-slate-50 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3 text-left">
                      <h3 className="text-xl font-bold text-deep-blue group-hover:text-solar-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed min-h-[72px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Bullets List */}
                    <ul className="space-y-2 text-left pt-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-eco-green"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Learn More link */}
                  <div className="relative z-10 pt-8 flex items-center text-sm font-bold text-deep-blue group-hover:text-solar-orange transition-colors mt-auto">
                    <a href="#contact" className="flex items-center gap-1.5 hover:underline">
                      Inquire Now
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-slate-200 hover:border-solar-orange hover:bg-solar-orange/5 text-slate-700 hover:text-solar-orange transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Previous offering"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  slideIndex === idx ? 'w-6 bg-solar-orange' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-slate-200 hover:border-solar-orange hover:bg-solar-orange/5 text-slate-700 hover:text-solar-orange transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Next offering"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
