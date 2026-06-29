import { Link } from 'react-router';
import { Factory, Ship, Leaf, Settings, Shield, Users, FileCheck, Clock, Award, ChevronRight } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';

const serviceGateways = [
  {
    icon: Factory,
    title: 'Factory Compliance & Audits',
    description: 'Navigate Bangladesh boiler regulations, safety inspections, and foreign buyer compliance requirements.',
    path: '/services/compliance',
  },
  {
    icon: Ship,
    title: 'Equipment Import & Registration',
    description: 'End-to-end machinery import from China — sourcing, shipping, customs clearance, and BOI registration.',
    path: '/services/import',
  },
  {
    icon: Leaf,
    title: 'Energy & Fuel Solutions',
    description: 'Biomass boiler conversions, fuel cost optimization, and sustainable energy consulting for factories.',
    path: '/services/energy',
  },
  {
    icon: Settings,
    title: 'Industrial Consulting',
    description: 'Feasibility studies, factory setup, process optimization, and technical advisory services.',
    path: '/services/consulting',
  },
];

const trustIndicators = [
  { icon: Shield, label: 'Licensed & Registered', sub: 'TIN + Trade License' },
  { icon: Users, label: '50+ Factory Clients', sub: 'Across Bangladesh' },
  { icon: FileCheck, label: '100% Compliance Rate', sub: 'Audit Success' },
  { icon: Clock, label: 'Since 2020', sub: '5+ Years Experience' },
];

const whyChooseUs = [
  {
    title: 'Local Expertise, Global Standards',
    description: 'Deep knowledge of Bangladesh regulations combined with international best practices for factory compliance.',
  },
  {
    title: 'End-to-End Service',
    description: 'From paperwork to installation — we handle every step so you can focus on production.',
  },
  {
    title: 'China-Bangladesh Bridge',
    description: 'Direct relationships with Chinese manufacturers mean better prices and faster delivery.',
  },
  {
    title: 'Proven Track Record',
    description: '50+ factories trust us with their compliance, equipment import, and energy optimization.',
  },
];

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-20">
        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8 lg:gap-12">
          {/* Left Column */}
          <div>
            <AnimatedHeading
              text="Industrial Solutions\nfor Bangladesh"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
              charDelay={25}
            />
            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">
                Your trusted partner for factory compliance, equipment import, and energy
                solutions. Helping Bangladesh industries grow since 2020.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Get Free Assessment
                  <ChevronRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
                >
                  Explore Services
                  <ChevronRight size={18} />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Tag */}
          <FadeIn delay={1400} duration={1000}>
            <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-4 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Compliance. Import. Energy.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  One partner. Every solution.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-6 md:px-12 lg:px-16 py-8 border-y border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((item, index) => (
            <FadeIn key={item.label} delay={200 + index * 100} duration={600}>
              <div className="flex items-center gap-3">
                <item.icon className="text-gray-400" size={24} />
                <div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Service Gateways */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <FadeIn delay={200} duration={600}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3">
              Our Service Gateways
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Four specialized pillars designed to solve every industrial challenge
              Bangladesh factories face today.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceGateways.map((service, index) => (
            <FadeIn key={service.title} delay={300 + index * 150} duration={600}>
              <Link to={service.path} className="group block">
                <div className="liquid-glass rounded-xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-300 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <service.icon
                      className="text-white group-hover:scale-110 transition-transform"
                      size={32}
                    />
                    <ChevronRight
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                      size={20}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3">
                Why Choose Us
              </h2>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                We combine local regulatory expertise with international manufacturing
                connections to deliver unmatched value.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <FadeIn key={item.title} delay={300 + index * 150} duration={600}>
                <div className="liquid-glass-strong rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-white" size={20} />
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <FadeIn delay={200} duration={800}>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 lg:p-16 text-center border border-white/10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
              Ready to Optimize Your Factory?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
              Get a free assessment of your factory&apos;s compliance status, energy
              efficiency, and equipment needs. No obligations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get Free Assessment
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/resources"
                className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
              >
                Browse Resources
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
