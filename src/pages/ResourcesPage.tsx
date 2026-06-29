import { useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, Calculator, FileText, CheckSquare, ChevronRight, Download, ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const resources = [
  {
    icon: BookOpen,
    title: 'Bangladesh Boiler Rules 2025',
    description: 'Complete guide to the latest boiler regulations in Bangladesh. Registration process, inspection requirements, penalties, and compliance checklist.',
    type: 'PDF Guide',
    cta: 'Download PDF',
    link: '#download',
  },
  {
    icon: Calculator,
    title: 'Fuel Cost Calculator',
    description: 'Interactive calculator to compare fuel costs across gas, diesel, biomass, and electricity. Model your monthly steam production costs and find the optimal fuel mix.',
    type: 'Interactive Tool',
    cta: 'Open Calculator',
    link: '#calculator',
  },
  {
    icon: FileText,
    title: 'TDF Loan Application Guide',
    description: 'Step-by-step guide to applying for Term Development Facility loans from Bangladesh Bank for machinery purchase and factory expansion.',
    type: 'PDF Guide',
    cta: 'Download PDF',
    link: '#download',
  },
  {
    icon: CheckSquare,
    title: 'Factory Compliance Checklist',
    description: 'A comprehensive checklist covering all major compliance areas — boiler, fire safety, environment, labor, and foreign buyer requirements.',
    type: 'PDF Checklist',
    cta: 'Download PDF',
    link: '#download',
  },
];

const blogPosts = [
  {
    title: 'Biomass Boilers in Bangladesh: 2025 Guide',
    excerpt: 'Why biomass is becoming the fuel of choice for Bangladesh factories. Government incentives, EU buyer preferences, and cost savings explained.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
  },
  {
    title: 'How to Import Machinery from China: Complete Process',
    excerpt: 'Step-by-step guide to importing industrial equipment from China to Bangladesh. Supplier verification, shipping, customs, and BOI registration.',
    date: 'Dec 22, 2024',
    readTime: '12 min read',
  },
  {
    title: 'Bangladesh Boiler Registration: Avoid These 10 Mistakes',
    excerpt: 'Common errors that delay boiler registration or lead to failed inspections. Save time and money with these expert tips.',
    date: 'Nov 30, 2024',
    readTime: '6 min read',
  },
  {
    title: 'Understanding CSDDD: What EU Buyers Want',
    excerpt: 'The Corporate Sustainability Due Diligence Directive explained. How Bangladesh factories can prepare for EU buyer audits.',
    date: 'Nov 10, 2024',
    readTime: '10 min read',
  },
  {
    title: 'TDF Loan vs Private Bank Loan: Which is Better?',
    excerpt: 'Compare Bangladesh Bank Term Development Facility against private bank machinery loans. Interest rates, terms, and eligibility.',
    date: 'Oct 28, 2024',
    readTime: '7 min read',
  },
];

export default function ResourcesPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [steamDemand, setSteamDemand] = useState(1000);
  const [hoursPerDay, setHoursPerDay] = useState(12);
  const [daysPerMonth, setDaysPerMonth] = useState(26);

  const monthlySteam = steamDemand * hoursPerDay * daysPerMonth; // kg/month

  const fuelCosts = [
    { name: 'Natural Gas', unit: 'm³', unitCost: 40, unitsNeeded: (monthlySteam / 10).toFixed(0), monthlyCost: monthlySteam * 4 },
    { name: 'Diesel', unit: 'L', unitCost: 120, unitsNeeded: (monthlySteam / 12).toFixed(0), monthlyCost: monthlySteam * 10 },
    { name: 'Biomass (Rice Husk)', unit: 'kg', unitCost: 10, unitsNeeded: (monthlySteam / 4).toFixed(0), monthlyCost: monthlySteam * 2.5 },
    { name: 'Biomass (Pellet)', unit: 'kg', unitCost: 18, unitsNeeded: (monthlySteam / 5).toFixed(0), monthlyCost: monthlySteam * 3.6 },
  ];

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={600}>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Resources
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Free guides, calculators, and tools to help Bangladesh factory owners
              make informed decisions. No email required.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Resources Grid */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <FadeIn key={resource.title} delay={300 + index * 150} duration={600}>
              <div className="liquid-glass rounded-xl p-6 border border-white/10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <resource.icon className="text-white" size={28} />
                  <span className="text-gray-500 text-xs bg-white/5 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-white font-medium text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>
                <button
                  onClick={() => resource.title.includes('Calculator') ? setShowCalculator(!showCalculator) : null}
                  className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors"
                >
                  {resource.title.includes('PDF') ? <Download size={16} /> : <ExternalLink size={16} />}
                  {resource.cta}
                  <ChevronRight size={14} />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Fuel Cost Calculator */}
      {showCalculator && (
        <section className="px-6 md:px-12 lg:px-16 py-8 bg-black/30 border-y border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={200} duration={600}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-white">Fuel Cost Calculator</h2>
                <button
                  onClick={() => setShowCalculator(false)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Close
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Steam Demand (kg/hr)</label>
                  <input
                    type="number"
                    value={steamDemand}
                    onChange={(e) => setSteamDemand(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Operating Hours/Day</label>
                  <input
                    type="number"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Operating Days/Month</label>
                  <input
                    type="number"
                    value={daysPerMonth}
                    onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left text-gray-400 font-medium py-2 px-3">Fuel Type</th>
                      <th className="text-right text-gray-400 font-medium py-2 px-3">Units/Month</th>
                      <th className="text-right text-gray-400 font-medium py-2 px-3">Est. Monthly Cost (BDT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fuelCosts.map((fuel) => (
                      <tr key={fuel.name} className="border-b border-white/10">
                        <td className="py-2 px-3 text-white">{fuel.name}</td>
                        <td className="py-2 px-3 text-right text-gray-300">{Number(fuel.unitsNeeded).toLocaleString()} {fuel.unit}</td>
                        <td className="py-2 px-3 text-right text-white font-medium">{fuel.monthlyCost.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                * Estimates based on typical boiler efficiencies. Actual costs vary. Contact us for a detailed energy audit.
              </p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Blog */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                Blog
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                Insights, guides, and industry updates for Bangladesh factory owners.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.title} delay={300 + index * 100} duration={500}>
                <article className="liquid-glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-white font-medium group-hover:text-gray-200 transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <p className="text-gray-500 text-xs">{post.date}</p>
                        <p className="text-gray-500 text-xs">{post.readTime}</p>
                      </div>
                      <ChevronRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" size={18} />
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="text-center">
            <h2 className="text-2xl font-medium text-white mb-4">
              Need Personalized Advice?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Our resources are a starting point. For tailored guidance specific to
              your factory, book a free consultation.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ChevronRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
