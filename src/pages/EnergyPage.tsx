import { Link } from 'react-router';
import { Leaf, Check, ArrowLeft, Flame, TrendingDown, Sun, Droplets } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const services = [
  {
    icon: Flame,
    title: 'Biomass Boiler Conversion',
    desc: 'Assess feasibility of converting your existing gas/oil boiler to biomass (rice husk, wood chip, pellet). Full ROI analysis included.',
  },
  {
    icon: TrendingDown,
    title: 'Fuel Cost Optimization',
    desc: 'Compare gas, diesel, biomass, and electricity costs for your specific steam demand. We model 12-month scenarios with price volatility.',
  },
  {
    icon: Sun,
    title: 'Solar PV for Factories',
    desc: 'Rooftop solar feasibility, vendor selection, and net metering application. Typical payback: 3-4 years for Bangladesh factories.',
  },
  {
    icon: Droplets,
    title: 'Energy Audit & Efficiency',
    desc: 'Comprehensive energy audit identifying waste and optimization opportunities. Actionable report with prioritized recommendations.',
  },
];

const fuelComparison = [
  { fuel: 'Natural Gas', cost: 'BDT 35-45/m³', availability: 'Limited', trend: 'Rising', color: 'text-yellow-400' },
  { fuel: 'Diesel', cost: 'BDT 110-130/L', availability: 'Good', trend: 'Volatile', color: 'text-red-400' },
  { fuel: 'Biomass (Rice Husk)', cost: 'BDT 8-12/kg', availability: 'Abundant', trend: 'Stable', color: 'text-green-400' },
  { fuel: 'Biomass (Pellet)', cost: 'BDT 15-20/kg', availability: 'Good', trend: 'Declining', color: 'text-green-400' },
  { fuel: 'Electricity (Grid)', cost: 'BDT 12-15/kWh', availability: 'Unreliable', trend: 'Rising', color: 'text-red-400' },
  { fuel: 'LPG', cost: 'BDT 85-100/kg', availability: 'Good', trend: 'Stable', color: 'text-yellow-400' },
];

const whyBiomass = [
  'Government subsidies available (SREDA)',
  'EU buyers prefer carbon-neutral supply chains',
  'Fuel cost savings of 40-60% vs gas/diesel',
  'Carbon credit eligibility',
  'Local fuel sourcing reduces forex exposure',
  'Waste-to-energy: use rice husk, sawdust, bagasse',
];

export default function EnergyPage() {
  return (
    <div className="relative z-10">
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={400}>
          <Link
            to="/services"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm mb-6"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </FadeIn>

        <FadeIn delay={300} duration={600}>
          <div className="flex items-center gap-4 mb-4">
            <Leaf className="text-white" size={40} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Energy & Fuel Solutions
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Transform your factory&apos;s energy profile. Cut fuel costs by 40-60%
            with biomass conversion, optimize your energy mix, and meet EU buyer
            sustainability requirements.
          </p>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={400 + i * 100} duration={500}>
              <div className="liquid-glass rounded-xl p-6 border border-white/10">
                <s.icon className="text-white mb-3" size={28} />
                <h3 className="text-white font-medium mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Fuel Cost Comparison */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">
              Fuel Cost Comparison (2025)
            </h2>
          </FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Fuel Type</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Unit Cost</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Availability</th>
                  <th className="text-left text-gray-400 font-medium py-3 px-4">Price Trend</th>
                </tr>
              </thead>
              <tbody>
                {fuelComparison.map((row, i) => (
                  <FadeIn key={row.fuel} delay={300 + i * 80} duration={400}>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">{row.fuel}</td>
                      <td className="py-3 px-4 text-gray-300">{row.cost}</td>
                      <td className="py-3 px-4 text-gray-300">{row.availability}</td>
                      <td className="py-3 px-4">
                        <span className={`${row.color} font-medium`}>{row.trend}</span>
                      </td>
                    </tr>
                  </FadeIn>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Biomass */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">
              Why Biomass is the Future
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whyBiomass.map((item, i) => (
              <FadeIn key={item} delay={300 + i * 80} duration={400}>
                <div className="liquid-glass rounded-lg p-4 border border-white/10 flex items-start gap-3">
                  <Check size={18} className="text-green-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 text-center border border-white/10">
            <h2 className="text-2xl font-medium text-white mb-4">
              Free Energy Assessment
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              We will analyze your current fuel costs, steam demand, and boiler setup
              to recommend the optimal energy mix. Free, no obligation.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Request Energy Audit
              <Leaf size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
