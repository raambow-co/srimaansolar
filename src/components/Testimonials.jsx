import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const reviews = [
    {
      id: 1,
      name: 'K. Srinivasa Rao',
      location: 'Kukatpally, Hyderabad',
      avatar: avatar1,
      rating: 5,
      text: 'Srimaan Solar Solutions installed a 5kW on-grid system on my rooftop. The team was highly professional and handled all the net metering paperwork with TGSPDCL seamlessly. My electricity bills have dropped from ₹6,500 to under ₹500, and I have already received my ₹78,000 subsidy!',
    },
    {
      id: 2,
      name: 'Nikhila Reddy',
      location: 'Hanamkonda, Warangal',
      avatar: avatar2,
      rating: 5,
      text: 'We set up a hybrid system for our commercial clinic. Power outages were a big issue for us, but with their battery-backup configuration, our equipment runs without interruptions. Their support is top-notch, always available to check our generation dashboards.',
    },
    {
      id: 3,
      name: 'M. Anji Reddy',
      location: 'Suryapet District, Telangana',
      avatar: avatar3,
      rating: 5,
      text: 'We installed a 7.5HP solar pump set for farm irrigation. The water output is fantastic even on partially cloudy days. Free daytime electricity means I do not have to work late at night for watering my crops. Highly recommend their agricultural solutions!',
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual rings */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-solar-orange/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-eco-green/10 border border-eco-green/20 px-3 py-1 rounded-full text-eco-green font-bold text-sm">
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-base">
            Read reviews from homeowners, business leaders, and farmers across Telangana who transitioned to solar with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="relative overflow-hidden bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-md">
            
            {/* Background Quote Mark */}
            <Quote className="absolute top-8 right-8 h-24 w-24 text-slate-100/80 -z-10 pointer-events-none" />

            <div className="min-h-[220px] relative flex flex-col justify-between">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-6 text-left"
                >
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-solar-orange text-solar-orange" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                    "{reviews[currentIndex].text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                    <img
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-solar-orange shadow-sm"
                    />
                    <div>
                      <h4 className="font-extrabold text-deep-blue text-base sm:text-lg leading-snug">
                        {reviews[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-slate-400">
                        {reviews[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center sm:justify-between items-center gap-6 mt-8 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:inset-x-0 sm:mt-0 sm:pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-solar-orange hover:text-white text-deep-blue rounded-full border border-slate-100 shadow-md transition-all pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-solar-orange hover:text-white text-deep-blue rounded-full border border-slate-100 shadow-md transition-all pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2.5 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-solar-orange' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
