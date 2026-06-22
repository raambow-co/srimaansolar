import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Landmark, TrendingUp, Sun, Sparkles, MapPin, Ruler, CircleAlert } from 'lucide-react';

const Calculator = () => {
  const [bill, setBill] = useState(2500); // Monthly bill in INR
  const [roofSize, setRoofSize] = useState(300); // Roof size in sq. ft
  const [location, setLocation] = useState('Hyderabad');

  const [results, setResults] = useState({
    systemSize: 0,
    annualSavings: 0,
    subsidy: 0,
    totalCost: 0,
    netCost: 0,
    paybackPeriod: 0,
    isRoofTooSmall: false,
  });

  const districts = [
    // Telangana
    'Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 
    'Karimnagar', 'Nalgonda', 'Mahabubnagar', 'Adilabad',
    // Andhra Pradesh
    'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 
    'Nellore', 'Kurnool', 'Anantapur', 'Rajahmundry'
  ];

  useEffect(() => {
    // 1. Calculate energy usage. Assume average unit price is ₹8 in Telangana and Andhra Pradesh.
    const averageRatePerUnit = 8;
    const monthlyUnits = bill / averageRatePerUnit;
    const dailyUnits = monthlyUnits / 30;

    // 2. Solar generation: In Telangana and Andhra Pradesh, 1kW solar produces ~4 units per day.
    // Recommended system size = Daily units / 4, rounded to nearest 0.5 kW
    let recommendedSize = Math.max(1, Math.round((dailyUnits / 4) * 2) / 2);
    
    // Cap recommended size to 10kW for default residential calculator
    if (recommendedSize > 10) recommendedSize = 10;

    // 3. Check roof size suitability (1 kW needs ~100 sq ft shadow-free space)
    const roofRequired = recommendedSize * 100;
    const isRoofTooSmall = roofSize < roofRequired;

    // 4. Calculate system cost. Assume average cost of ₹65,000 per kW in India.
    const systemCostPerkW = 65000;
    const totalCost = recommendedSize * systemCostPerkW;

    // 5. Calculate PM Surya Ghar Yojana Subsidy
    // 1 kW = 30,000; 2 kW = 60,000; >= 3 kW = 78,000 (capped)
    let subsidy = 0;
    if (recommendedSize >= 3) {
      subsidy = 78000;
    } else if (recommendedSize >= 2) {
      subsidy = 60000;
    } else if (recommendedSize >= 1) {
      subsidy = 30000;
    }

    const netCost = totalCost - subsidy;

    // 6. Annual Savings
    // Annual units generated = systemSize * 4 units/day * 365 days
    const annualUnitsGenerated = recommendedSize * 4 * 365;
    // Offset limit: Cannot save more than current annual usage
    const annualUnitsUsed = monthlyUnits * 12;
    const offsetUnits = Math.min(annualUnitsUsed, annualUnitsGenerated);
    const annualSavings = Math.round(offsetUnits * averageRatePerUnit);

    // 7. Payback Period
    const paybackPeriod = annualSavings > 0 ? (netCost / annualSavings).toFixed(1) : 0;

    setResults({
      systemSize: recommendedSize,
      annualSavings,
      subsidy,
      totalCost,
      netCost,
      paybackPeriod,
      isRoofTooSmall,
    });
  }, [bill, roofSize, location]);

  const handleInquiryRedirect = () => {
    // Populate form if needed or scroll
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      // Custom event to pass values to contact form
      const event = new CustomEvent('fillSolarData', {
        detail: {
          bill: `₹${bill}/month`,
          message: `Interested in a ${results.systemSize} kW Solar System for my property in ${location}. Estimated roof size is ${roofSize} sq.ft. Recommended subsidy is ₹${results.subsidy.toLocaleString('en-IN')}.`,
        }
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-eco-green/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-solar-orange/10 border border-solar-orange/20 px-3 py-1 rounded-full text-solar-orange font-bold text-sm">
            <CalcIcon className="h-4 w-4 mr-1.5" />
            <span>Interactive Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
            Calculate Your Solar Savings
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Find the perfect system size for your home and see how much government subsidy you can receive under PM Surya Ghar Yojana.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl text-left space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-deep-blue mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-solar-orange" />
                Provide Your Energy Details
              </h3>

              <div className="space-y-6">
                {/* Location Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-solar-orange" />
                    Installation Location (TS & AP)
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-solar-orange focus:border-transparent transition-all"
                  >
                    {districts.map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>

                {/* Monthly Bill Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                      <Sun className="h-4 w-4 text-solar-orange" />
                      Monthly Electricity Bill
                    </label>
                    <span className="text-lg font-extrabold text-solar-orange">₹{bill.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-orange"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>₹500</span>
                    <span>₹10,000</span>
                    <span>₹20,000+</span>
                  </div>
                </div>

                {/* Roof Size Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                      <Ruler className="h-4 w-4 text-solar-orange" />
                      Available Roof Area (Shadow-Free)
                    </label>
                    <span className="text-lg font-extrabold text-solar-orange">{roofSize} Sq. Ft.</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-orange"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>50 Sq. Ft.</span>
                    <span>1,000 Sq. Ft.</span>
                    <span>2,000 Sq. Ft.</span>
                  </div>
                </div>
              </div>

              {/* Roof size warning */}
              {results.isRoofTooSmall && (
                <div className="mt-6 flex items-start space-x-2 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-800 text-xs">
                  <CircleAlert className="h-4 w-4 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Space Constraint:</strong> A {results.systemSize} kW solar panel array requires approximately {results.systemSize * 100} sq. ft. of space. Your entered roof size of {roofSize} sq. ft. might be slightly tight, but we can deploy custom elevated structural designs to fit it!
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200/60 mt-6">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                * Calculations are approximations based on normal solar irradiances in Telangana and Andhra Pradesh. Actual site conditions may alter exact requirements.
              </p>
            </div>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-5 bg-gradient-to-br from-deep-blue to-deep-blue-dark p-6 sm:p-8 rounded-3xl text-left text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-200 border-b border-white/10 pb-4">
                Recommended Solution
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Recommended System Size</span>
                  <div className="flex items-baseline space-x-1 mt-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">{results.systemSize}</span>
                    <span className="text-lg font-bold text-eco-green-light">kW</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Annual Savings</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-eco-green-light block mt-1">
                      ₹{results.annualSavings.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Govt. Subsidy</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-solar-orange block mt-1">
                      ₹{results.subsidy.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/10"></div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Net Setup Cost</span>
                    <span className="text-lg font-bold text-slate-200 block mt-0.5">
                      ₹{results.netCost.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through">₹{results.totalCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Payback Period</span>
                    <div className="flex items-baseline space-x-0.5 mt-0.5">
                      <span className="text-xl font-extrabold text-white">{results.paybackPeriod}</span>
                      <span className="text-xs font-bold text-slate-300">Years</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Thereafter 20+ Yrs Free Power</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleInquiryRedirect}
              className="w-full bg-solar-orange hover:bg-solar-orange-light text-white font-bold py-4 rounded-xl shadow-lg shadow-solar-orange/30 hover:shadow-solar-orange/50 transition-all duration-300 flex items-center justify-center gap-2 mt-8"
            >
              <Landmark className="h-5 w-5" />
              Apply For Subsidy Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
