import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, Milestone, Users, Cpu } from 'lucide-react';

const Counter = ({ value, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-5xl text-deep-blue">
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <Award className="h-6 w-6 text-solar-orange" />,
      title: '5+ Years Experience',
      desc: 'Proven track record of delivering clean energy engineering in Telangana and Andhra Pradesh.',
    },
    {
      icon: <Users className="h-6 w-6 text-eco-green" />,
      title: '200+ Installations',
      desc: 'Hundreds of happy residential, commercial, and agricultural clients.',
    },
    {
      icon: <Milestone className="h-6 w-6 text-deep-blue" />,
      title: 'Government Subsidy Assistance',
      desc: '100% support for application and documentation under PM Surya Ghar Yojana.',
    },
    {
      icon: <Cpu className="h-6 w-6 text-solar-orange" />,
      title: 'Premium Solar Panels',
      desc: 'High-efficiency A-grade Tier-1 modules with performance guarantees.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-eco-green" />,
      title: 'Expert Installation Team',
      desc: 'MNRE guidelines-compliant, qualified engineers and technicians.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-eco-green/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-solar-orange/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Vision, and Animated Counters */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-eco-green/10 border border-eco-green/20 px-3 py-1 rounded-full text-eco-green font-bold text-sm">
              <span>About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue leading-tight">
              Empowering Telangana & AP <br />
              <span className="text-solar-orange">With Green Energy</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-base">
              Providing reliable, affordable, and sustainable solar energy solutions across Telangana and Andhra Pradesh. We help homeowners, businesses, and industries reduce electricity bills through high-quality solar installations and government subsidy benefits.
            </p>
            
            <blockquote className="border-l-4 border-solar-orange pl-4 italic text-slate-500 font-medium">
              "Harness the Sun. Empower Your Future."
            </blockquote>

            {/* Counters wrapper */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center">
                <div className="flex items-baseline space-x-0.5">
                  <Counter value="5" suffix="+" />
                </div>
                <span className="text-sm font-semibold text-slate-500 mt-2">Years of Expertise</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center">
                <div className="flex items-baseline space-x-0.5">
                  <Counter value="200" suffix="+" />
                </div>
                <span className="text-sm font-semibold text-slate-500 mt-2">Solar Installations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
            >
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(15, 76, 129, 0.08)' }}
                  className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 ${
                    idx === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="p-3 bg-slate-50 rounded-xl inline-block mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
