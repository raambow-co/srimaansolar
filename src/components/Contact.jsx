import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Send, CheckCircle2, User, Smartphone, MapPin, Coins } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('₹1,500 - ₹3,000');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Listen to fillSolarData event from the Savings Calculator
  useEffect(() => {
    const handleFillData = (e) => {
      if (e.detail) {
        if (e.detail.bill) setMonthlyBill(e.detail.bill);
        if (e.detail.message) setMessage(e.detail.message);
      }
    };
    window.addEventListener('fillSolarData', handleFillData);
    return () => window.removeEventListener('fillSolarData', handleFillData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !location) {
      alert('Please fill in your Name, Phone Number, and Location.');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset form
      setName('');
      setPhone('');
      setLocation('');
      setMessage('');
    }, 1200);
  };

  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi Srimaan Solar, I would like to get a quote for a rooftop solar installation. My location is ${location || 'Telangana'} and my average monthly bill is ${monthlyBill}.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct CTA and Contact details */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-24">
            <div className="inline-flex items-center space-x-2 bg-solar-orange/10 border border-solar-orange/20 px-3 py-1 rounded-full text-solar-orange font-bold text-sm">
              <span>Start Saving Today</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue leading-tight">
              Get A Free Solar Consultation
            </h2>
            
            <p className="text-slate-500 text-base leading-relaxed">
              Ready to slash your electric bill and transition to clean power? Send us your details, and our technical engineers will contact you to perform a free remote site assessment.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="h-5 w-5 fill-white text-[#25D366]" />
                Inquire on WhatsApp
              </a>
              
              <a
                href="tel:+919876543210"
                className="w-full bg-deep-blue hover:bg-deep-blue-dark text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Phone className="h-5 w-5 fill-white text-deep-blue" />
                Call Now: +91 98765 43210
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs font-semibold text-slate-400 space-y-2">
              <p>📍 Srimaan Solar Solutions, Hyderabad, Telangana, India</p>
              <p>✉️ support@srimaansolar.com • info@srimaansolar.com</p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-md relative overflow-hidden">
              
              {/* Form loader */}
              {loading && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-10">
                  <div className="h-10 w-10 border-4 border-solar-orange border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Form Content / Success Screen */}
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <h3 className="text-xl font-bold text-deep-blue mb-4">Request a Quote</h3>

                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-solar-orange" /> Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-solar-orange focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <Smartphone className="h-3.5 w-3.5 text-solar-orange" /> Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-solar-orange focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Location Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-solar-orange" /> Location
                        </label>
                        <input
                          type="text"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. Warangal, Hyderabad"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-solar-orange focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Monthly Bill Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Coins className="h-3.5 w-3.5 text-solar-orange" /> Monthly Electricity Bill
                      </label>
                      <select
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-solar-orange focus:border-transparent transition-all"
                      >
                        <option value="Under ₹1,500">Under ₹1,500</option>
                        <option value="₹1,500 - ₹3,000">₹1,500 - ₹3,000</option>
                        <option value="₹3,000 - ₹6,000">₹3,000 - ₹6,000</option>
                        <option value="₹6,000 - ₹10,000">₹6,000 - ₹10,000</option>
                        <option value="₹10,000+">₹10,000+</option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message (Optional)</label>
                      <textarea
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share any details about your roof or requirements..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-solar-orange focus:border-transparent transition-all"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-solar-orange hover:bg-solar-orange-light text-white font-bold py-4 rounded-xl shadow-lg shadow-solar-orange/20 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="h-4.5 w-4.5" />
                      Submit Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                  >
                    <CheckCircle2 className="h-16 w-16 text-eco-green" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-deep-blue">Inquiry Submitted!</h3>
                      <p className="text-slate-500 text-sm max-w-sm">
                        Thank you for contacting Srimaan Solar Solutions. Our local solar consultant will reach out to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
