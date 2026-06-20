import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, MapPin, Zap } from 'lucide-react';

import projResi from '../assets/project-residential.png';
import projComm from '../assets/project-commercial.png';
import projAgri from '../assets/project-agricultural.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const projects = [
    {
      id: 1,
      title: '5kW Residential Rooftop Solar',
      category: 'residential',
      location: 'Secunderabad, Hyderabad',
      capacity: '5 kW',
      image: projResi,
      details: 'Mono-PERC Half-cut modules installed on a modern dual-slope terrace. Cuts monthly bill by 92%.',
    },
    {
      id: 2,
      title: '150kW Industrial Solar Plant',
      category: 'commercial',
      location: 'Cherlapally Industrial Area, Hyderabad',
      capacity: '150 kW',
      image: projComm,
      details: 'Large commercial grid-connected system using premium hot-dip galvanized mounting structures.',
    },
    {
      id: 3,
      title: 'Solar Water Pump System',
      category: 'agricultural',
      location: 'Nalgonda District, Telangana',
      capacity: '7.5 HP',
      image: projAgri,
      details: 'MNRE approved solar water pumping system powering continuous crop irrigation for 8+ acres.',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-solar-orange/10 border border-solar-orange/20 px-3 py-1 rounded-full text-solar-orange font-bold text-sm">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
            Our Completed Projects
          </h2>
          <p className="text-slate-500 text-base">
            Take a look at how we are harnessing solar power to drive sustainability for homes, commercial hubs, and agricultural farmlands across Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'residential', 'commercial', 'agricultural'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
                filter === cat
                  ? 'bg-solar-orange text-white shadow-md shadow-solar-orange/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Show All' : `${cat} Projects`}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group relative"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-video bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-deep-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setLightboxImg(project)}
                      className="p-3 bg-white text-deep-blue rounded-full shadow-lg hover:bg-solar-orange hover:text-white transition-colors"
                      aria-label="Expand image"
                    >
                      <Maximize2 className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-solar-orange uppercase tracking-wider">
                      <span>{project.category}</span>
                      <span className="flex items-center text-eco-green gap-1 bg-eco-green/10 px-2 py-0.5 rounded-full">
                        <Zap className="h-3 w-3" />
                        {project.capacity}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-blue leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  <div className="flex items-center text-slate-400 text-xs font-semibold pt-4 border-t border-slate-200/50">
                    <MapPin className="h-4 w-4 mr-1 text-slate-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-backdrop"
              onClick={() => setLightboxImg(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImg(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto md:h-[450px]">
                    <img
                      src={lightboxImg.image}
                      alt={lightboxImg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 text-left flex flex-col justify-between h-full bg-white space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-solar-orange uppercase tracking-widest bg-solar-orange/10 px-2.5 py-1 rounded-full">
                          {lightboxImg.category}
                        </span>
                        <span className="text-xs font-bold text-eco-green uppercase tracking-widest bg-eco-green/10 px-2.5 py-1 rounded-full">
                          {lightboxImg.capacity} capacity
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-extrabold text-deep-blue">
                        {lightboxImg.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {lightboxImg.details}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-col gap-2">
                      <div className="flex items-center text-sm font-semibold text-slate-500">
                        <MapPin className="h-4.5 w-4.5 mr-2 text-solar-orange shrink-0" />
                        <span>{lightboxImg.location}</span>
                      </div>
                      <a
                        href="#contact"
                        onClick={() => setLightboxImg(null)}
                        className="mt-4 text-center bg-solar-orange hover:bg-solar-orange-light text-white font-bold py-3 rounded-xl shadow-md transition-all duration-300"
                      >
                        Request Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
