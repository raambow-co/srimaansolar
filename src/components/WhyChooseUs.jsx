import { motion } from 'framer-motion';
import { FileCheck, Sparkles, ShieldAlert, Users, Cable, Headphones, Check } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      icon: <FileCheck className="h-6 w-6 text-solar-orange" />,
      title: 'MNRE Guidelines Support',
      desc: 'All installations rigidly adhere to the Ministry of New and Renewable Energy standards for maximum subsidy safety.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-eco-green" />,
      title: 'High Efficiency Panels',
      desc: 'We supply premium mono-PERC half-cut and bifacial solar modules that capture maximum sunlight even in low light.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-deep-blue" />,
      title: '25-Year Performance Warranty',
      desc: 'Our premium solar panels come with a linear performance warranty ensuring long-term returns for decades.',
    },
    {
      icon: <Users className="h-6 w-6 text-solar-orange" />,
      title: 'Professional Installation',
      desc: 'Certified and experienced structural and electrical engineers execute high-tensile hot-dip galvanized mounting structure installs.',
    },
    {
      icon: <Cable className="h-6 w-6 text-eco-green" />,
      title: 'Net Metering Assistance',
      desc: 'Complete liaisoning with state DISCOMs (TGNPDCL/TGSPDCL in Telangana, APEPDCL/APSPDCL in AP) for fast net-meter approval, commissioning, and bi-directional meter installation.',
    },
    {
      icon: <Headphones className="h-6 w-6 text-deep-blue" />,
      title: '24/7 Customer Support',
      desc: 'Dedicated local service team in Andhra Pradesh and Telangana for immediate assistance, remote monitoring dashboard setup, and troubleshooting.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-solar-orange/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-eco-green/10 border border-eco-green/20 px-3 py-1 rounded-full text-eco-green font-bold text-sm">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
            Uncompromised Quality in Every Watts
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We are dedicated to building long-term trust through robust engineering, MNRE certifications, and seamless utility integrations.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-start text-left transition-all duration-300 relative group"
            >
              <div className="absolute top-6 right-6 p-1 bg-eco-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Check className="h-4 w-4 text-eco-green" />
              </div>
              
              <div className="p-3 bg-slate-50 rounded-xl inline-block mb-6 group-hover:bg-solar-orange/10 group-hover:text-solar-orange transition-colors duration-300">
                {point.icon}
              </div>
              
              <h3 className="text-lg font-bold text-deep-blue mb-3 group-hover:text-solar-orange transition-colors">
                {point.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
