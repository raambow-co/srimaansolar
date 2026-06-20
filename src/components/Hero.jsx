import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Zap, Shield, HelpCircle, Sun, Users, IndianRupee, ShieldCheck } from 'lucide-react';
import rooftopSolar from '../assets/rooftop-solar.png';
import pmModi from '../assets/pm-modi.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark & Tinted Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={rooftopSolar}
          alt="Rooftop Solar Panels Andhra Pradesh and Telangana"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-10000"
          style={{ animation: 'zoom-slow 20s infinite alternate' }}
        />
        {/* Dual overlay for premium gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Floating Animated Solar Energy Graphics (Light Orbs) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-solar-orange/15 blur-xl"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12 pb-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-solar-orange/10 backdrop-blur-md border border-solar-orange/30 px-4 py-1.5 rounded-full text-solar-orange font-bold text-sm sm:text-base"
            >
              <Zap className="h-4 w-4 animate-bounce" />
              <span>Andhra Pradesh & Telangana's Leading Solar Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Power Your Home <br />
              <span className="text-solar-orange bg-gradient-to-r from-solar-orange to-solar-orange-light bg-clip-text text-transparent">
                With The Sun
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl font-medium text-slate-100 max-w-xl"
            >
              Save Energy <span className="text-solar-orange mx-1.5">•</span> Save Money <span className="text-eco-green mx-1.5">•</span> Save The Planet
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-slate-200 max-w-lg leading-relaxed"
            >
              Join 200+ families across Andhra Pradesh and Telangana reducing their electricity bills by up to 90% with modern on-grid, off-grid, and hybrid solar panel systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="bg-solar-orange text-white hover:bg-solar-orange-light px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-solar-orange/30 hover:shadow-solar-orange/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#calculator"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5 text-eco-green" />
                Calculate Savings
              </a>
            </motion.div>
          </div>

          {/* Hexagonal Image & Floating Stats Column */}
          <div className="lg:col-span-5 hidden lg:block relative py-12">
            {/* Outer dotted/dashed circle decorations for premium look */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110">
              <div className="w-[450px] h-[450px] rounded-full border border-dashed border-white/10 animate-spin-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] rounded-full border border-white/5"></div>
            </div>

            <div className="relative flex justify-center items-center">
              
              {/* Hexagon Wrapper with Border Gradient */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-[340px] h-[380px] bg-gradient-to-b from-solar-orange to-eco-green p-[3px] shadow-2xl"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <div
                  className="w-full h-full bg-slate-900 overflow-hidden relative"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <img
                    src={pmModi}
                    alt="PM Narendra Modi Solar Mission"
                    className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle dark overlay at the bottom for image text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  {/* Name label at the bottom of the image */}
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <span className="bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white border border-white/10 tracking-wide inline-block">
                      PM Narendra Modi
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 1: Top-Left */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -top-4 -left-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 w-[170px] cursor-pointer"
                >
                  <div className="p-2 bg-solar-orange/10 rounded-xl">
                    <Sun className="h-5 w-5 text-solar-orange animate-pulse" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Solar Yield</span>
                    <span className="block text-sm font-extrabold text-slate-800">10 MW+</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Card 2: Top-Right */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute top-12 -right-10 z-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -14, scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 w-[175px] cursor-pointer"
                >
                  <div className="p-2 bg-eco-green/10 rounded-xl">
                    <Users className="h-5 w-5 text-eco-green" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Active Installs</span>
                    <span className="block text-sm font-extrabold text-slate-800">200+ Installed</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Card 3: Bottom-Left */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="absolute bottom-16 -left-12 z-20"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -11, scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 w-[170px] cursor-pointer"
                >
                  <div className="p-2 bg-deep-blue/10 rounded-xl">
                    <IndianRupee className="h-5 w-5 text-deep-blue" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Savings</span>
                    <span className="block text-sm font-extrabold text-slate-800">₹2 Cr+ Saved</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Card 4: Bottom-Right */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-4 -right-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -13, scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 w-[170px] cursor-pointer"
                >
                  <div className="p-2 bg-eco-green/10 rounded-xl">
                    <ShieldCheck className="h-5 w-5 text-eco-green" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Warranty Cover</span>
                    <span className="block text-sm font-extrabold text-slate-800">25-Year Protection</span>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Slide Transition styling */}
      <style>{`
        @keyframes zoom-slow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
