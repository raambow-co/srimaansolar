import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Coins, Leaf } from 'lucide-react';

const StatCounter = ({ value, duration = 1500, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 12);
    
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
    <span ref={ref} className="font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-7 w-7 text-solar-orange" />,
      value: '500',
      prefix: '',
      suffix: '+',
      label: 'Happy Customers',
      desc: 'Homes & businesses powered by Srimaan',
    },
    {
      icon: <Zap className="h-7 w-7 text-eco-green-light" />,
      value: '10',
      prefix: '',
      suffix: ' MW+',
      label: 'Installed Capacity',
      desc: 'Offsetting local grid consumption',
    },
    {
      icon: <Coins className="h-7 w-7 text-solar-orange" />,
      value: '2',
      prefix: '₹',
      suffix: ' Cr+',
      label: 'Customer Savings',
      desc: 'Cumulative reduction in electricity bills',
    },
    {
      icon: <Leaf className="h-7 w-7 text-eco-green-light" />,
      value: '1000',
      prefix: '',
      suffix: ' Tons',
      label: 'CO₂ Reduced',
      desc: 'Eco-footprint offset annually',
    },
  ];

  return (
    <section className="relative py-20 bg-deep-blue text-white overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-eco-green/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-slate-200 font-bold text-sm">
            <span>Our Environmental Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Srimaan Solar by the Numbers
          </h2>
          <p className="text-slate-300 text-base">
            Every panel we configure is a small step towards cleaner air, reduced carbon emissions, and massive monetary savings.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-center flex flex-col items-center justify-between group hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-4 bg-white/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              {/* Counter */}
              <div className="mb-2">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-400 font-semibold leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
