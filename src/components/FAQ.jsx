import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
      >
        <span className="text-base sm:text-lg font-bold text-deep-blue group-hover:text-solar-orange transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-1.5 rounded-full ${
            isOpen ? 'bg-solar-orange/10 text-solar-orange' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <ChevronDown className="h-4.5 w-4.5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-slate-500 pt-2 pb-4 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does rooftop solar cost in Telangana and Andhra Pradesh?',
      answer: 'The initial cost of installing solar panels depends on the system size. On average, a standard residential system in India costs between ₹60,000 to ₹75,000 per kW. For example, a 3kW system costs around ₹1.8 Lakhs to ₹2.1 Lakhs. However, with the PM Surya Ghar Yojana subsidy of ₹78,000, your effective net investment drops to around ₹1.1 Lakhs to ₹1.3 Lakhs.',
    },
    {
      question: 'What subsidy can I get under the PM Surya Ghar Yojana?',
      answer: 'The central government provides direct financial assistance for residential grid-tied solar installations: ₹30,000 for a 1kW system, ₹60,000 for a 2kW system, and a maximum cap of ₹78,000 for any system size 3kW and above. Subsidies are directly transferred to the customer\'s bank account within 30 days of project commissioning and net meter installation.',
    },
    {
      question: 'How long do solar panels last, and what is the warranty?',
      answer: 'Premium solar panels are highly durable and are designed to perform for 25 to 30 years. We supply panels that carry a 10 to 12-year product warranty against manufacturing defects and a 25-year linear power output performance warranty, ensuring your panels generate at least 80% to 85% of their original capacity after 25 years.',
    },
    {
      question: 'What is net metering and how does it work in Telangana and Andhra Pradesh?',
      answer: 'Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. In Telangana and Andhra Pradesh, under regional DISCOMs (such as TGNPDCL/TGSPDCL in Telangana and APEPDCL/APSPDCL/APCPDCL in AP), a bi-directional net meter records the electricity you import from the grid and the excess solar electricity you export. At the end of the billing cycle, you are only charged for the net units consumed.',
    },
    {
      question: 'Is maintenance required for solar panels?',
      answer: 'Solar systems require very minimal maintenance as they have no moving parts. The main maintenance activity is cleaning the panels with water every 10 to 15 days to remove dust and dirt, which can block sunlight and reduce performance by 10-15%. We offer comprehensive Annual Maintenance Contracts (AMC) that cover regular cleaning, wiring checks, and inverter diagnostics.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-solar-orange/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-solar-orange/10 border border-solar-orange/20 px-3 py-1 rounded-full text-solar-orange font-bold text-sm">
            <HelpCircle className="h-4 w-4 mr-1.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base">
            Find answers to standard questions about rooftop solar costs, central government subsidies, net-metering approvals, and upkeep.
          </p>
        </div>

        {/* Accordions Wrapper */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
