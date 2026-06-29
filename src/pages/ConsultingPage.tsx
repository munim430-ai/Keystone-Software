import { Link } from 'react-router';
import { Settings, Check, ArrowLeft, Building, LineChart, ClipboardList, Cog } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const services = [
  {
    icon: Building,
    title: 'New Factory Setup',
    desc: 'Complete consulting for setting up a new factory in Bangladesh — from land selection and building design to machinery layout and utility connections.',
  },
  {
    icon: LineChart,
    title: 'Production Line Optimization',
    desc: 'Analyze and redesign your production flow to increase output, reduce waste, and improve quality. Lean manufacturing principles applied.',
  },
  {
    icon: ClipboardList,
    title: 'Feasibility Studies',
    desc: 'Detailed business and technical feasibility studies for new projects, expansions, or product lines. Financial modeling included.',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    desc: 'Identify automation opportunities, select appropriate technology, and manage implementation from POC to production.',
  },
];

const consultingAreas = [
  'ISO 9001 / 14001 / 45001 Implementation',
  'Lean Manufacturing & Six Sigma',
  'Supply Chain Optimization',
  'Quality Control System Design',
  'Warehouse & Inventory Management',
  'ERP Selection & Implementation',
  'Technical Due Diligence for Investors',
  'Factory Expansion Planning',
  'Workforce Training Programs',
  'Safety Management Systems',
];

export default function ConsultingPage() {
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
            <Settings className="text-white" size={40} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Industrial Consulting
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Strategic advisory services for factory setup, expansion, and optimization.
            Turn your industrial vision into operational reality.
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

      {/* Consulting Areas */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">
              Consulting Areas
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {consultingAreas.map((item, i) => (
              <FadeIn key={item} delay={300 + i * 80} duration={400}>
                <div className="liquid-glass rounded-lg p-4 border border-white/10 flex items-start gap-3">
                  <Check size={16} className="text-white shrink-0 mt-0.5" />
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
          <div className="text-center">
            <h2 className="text-2xl font-medium text-white mb-4">
              Start Your Project
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Whether you are planning a new factory or optimizing an existing one —
              we bring the expertise you need.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book Consultation
              <Settings size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
