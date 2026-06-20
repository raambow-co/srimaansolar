import { motion } from 'framer-motion';
import { Percent, TrendingUp, Landmark, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

const Subsidy = () => {
  const subsidyRates = [
    { size: '1 kW System', subsidy: '₹30,000', eligibility: 'Suitable for small houses (1-2 fans, lights, TV)' },
    { size: '2 kW System', subsidy: '₹60,000', eligibility: 'Ideal for medium homes (AC, Fridge, Washing Machine)' },
    { size: '3 kW to 10 kW', subsidy: '₹78,000 (Max)', eligibility: 'Best for large households (Multiple ACs, heavy loads)' },
  ];

  return (
    <section id="subsidy" className="py-20 bg-deep-blue text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.15),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Scheme Information */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-solar-orange/20 border border-solar-orange/30 px-3 py-1 rounded-full text-solar-orange font-bold text-sm">
              <Landmark className="h-4 w-4 mr-1.5" />
              <span>Government of India Scheme</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Get Government Solar Subsidy Under <br />
              <span className="text-solar-orange">PM Surya Ghar Yojana</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              The national rooftop solar scheme offers up to **₹78,000 direct subsidy** transfer to your bank account. As an authorized solar vendor, Srimaan Solar Solutions coordinates your application, site verification, net metering, and subsidy disbursement.
            </p>

            {/* Benefits Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-eco-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">Reduced Setup Cost</h4>
                  <p className="text-xs text-slate-400">Up to 40% subsidized directly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-eco-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">Faster ROI</h4>
                  <p className="text-xs text-slate-400">Recover your investment in 3-4 years.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-eco-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">Lower Electricity Bills</h4>
                  <p className="text-xs text-slate-400">Save up to 90% on utility charges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-eco-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">Documentation Support</h4>
                  <p className="text-xs text-slate-400">100% paperless registration managed by us.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#calculator"
                className="inline-flex items-center bg-solar-orange text-white hover:bg-solar-orange-light font-bold px-6 py-3 rounded-xl shadow-lg shadow-solar-orange/20 transition-all duration-300 group"
              >
                Estimate Your Subsidy
                <ArrowRight className="h-4.5 w-4.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Subsidy Structure Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl space-y-6 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Percent className="h-6 w-6 text-solar-orange" />
                Official Subsidy Rates (2026)
              </h3>
              
              <div className="space-y-4">
                {subsidyRates.map((rate, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 flex items-center justify-between transition-colors duration-300"
                  >
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-100 text-sm sm:text-base">{rate.size}</h4>
                      <p className="text-xs text-slate-400 leading-normal max-w-xs sm:max-w-sm">{rate.eligibility}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-extrabold text-eco-green-light block">{rate.subsidy}</span>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Direct Subsidy</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning/Important disclaimer */}
              <div className="flex items-start space-x-3 bg-solar-orange/10 border border-solar-orange/20 p-4 rounded-xl">
                <ShieldAlert className="h-5 w-5 text-solar-orange shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Note:</strong> Net meters must be registered through official TGSPDCL/TGNPDCL DISCOM portals in Telangana to claim the PM Surya Ghar Yojana subsidies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Subsidy;
