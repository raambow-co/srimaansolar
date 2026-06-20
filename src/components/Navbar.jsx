import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Phone, Zap } from 'lucide-react';
import srimaanLogo from '../assets/srimaan-solar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Solar Solutions', href: '#services' },
    { name: 'Subsidy Guide', href: '#subsidy' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glassmorphism shadow-lg ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src={srimaanLogo}
              alt="Srimaan Solar Solutions"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-black hover:text-solar-orange transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-solar-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+919876543210"
                className="flex items-center text-black hover:text-solar-orange font-bold text-sm transition-colors"
              >
                <Phone className="h-4 w-4 mr-1 text-eco-green" />
                +91 98765 43210
              </a>
              <a
                href="#contact"
                className="bg-solar-orange text-white hover:bg-solar-orange-light px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-solar-orange/20 hover:shadow-lg hover:shadow-solar-orange/30 transition-all duration-300 flex items-center gap-1.5"
              >
                <Zap className="h-4 w-4" />
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="tel:+919876543210"
              className="p-2 text-black hover:text-solar-orange bg-white/50 rounded-full transition-colors"
            >
              <Phone className="h-5 w-5 text-eco-green" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-black hover:text-solar-orange bg-white/50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-over Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glassmorphism border-t border-slate-200/50 shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-solar-orange hover:bg-solar-orange/5 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200/50 flex flex-col gap-3 px-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center py-3 rounded-xl border border-slate-200 text-black font-bold text-base hover:bg-slate-50 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2 text-eco-green" />
                  Call: +91 98765 43210
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-3 rounded-xl bg-solar-orange text-white font-bold text-base hover:bg-solar-orange-light shadow-md shadow-solar-orange/20 transition-all duration-200"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Get Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
