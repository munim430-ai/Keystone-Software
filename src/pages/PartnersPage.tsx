import { Link } from 'react-router';
import { Globe, TrendingUp, Handshake, Users, BarChart3, MapPin, FileCheck } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const reasons = [
  {
    icon: Globe,
    title: 'Market Access',
    desc: 'Tap into Bangladesh\'s $40B+ manufacturing sector. Direct connections to 4,000+ active factories across RMG, textile, dyeing, and food processing.',
  },
  {
    icon: Handshake,
    title: 'Trusted Local Partner',
    desc: 'We are registered, licensed, and established on the ground. Factory owners trust us — which means they trust the equipment we recommend.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    desc: 'Real-time data on what Bangladesh factories need, their budget constraints, and buying cycles. We match your products to the right buyers.',
  },
  {
    icon: FileCheck,
    title: 'Regulatory Navigation',
    desc: 'We handle BOI registration, customs clearance, and compliance documentation — the biggest barriers for foreign manufacturers entering Bangladesh.',
  },
  {
    icon: Users,
    title: 'After-Sales Support',
    desc: 'Local technical support, spare parts coordination, and customer relationship management on your behalf. Your reputation stays protected.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Trajectory',
    desc: 'Bangladesh is Asia\'s fastest-growing manufacturing hub. Get in early and establish your brand before competitors catch up.',
  },
];

const marketStats = [
  { value: '4,000+', label: 'Active RMG Factories' },
  { value: '$40B+', label: 'Annual Export Value' },
  { value: '15%', label: 'Annual Machinery Import Growth' },
  { value: '2M+', label: 'Factory Workers' },
];

const servicesForManufacturers = [
  'Market research & buyer identification',
  'Product demonstration & factory visits',
  'Price negotiation & contract support',
  'BOI agent services & registration',
  'Customs clearance & logistics',
  'Installation supervision & commissioning',
  'Local spare parts inventory management',
  'After-sales service coordination',
  'Customer feedback & relationship management',
  'Annual maintenance contract facilitation',
];

export default function PartnersPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={600}>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Partner With Us
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Are you a Chinese machinery manufacturer looking to enter the Bangladesh
              market? We are your boots on the ground.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Market Stats */}
      <section className="px-6 md:px-12 lg:px-16 py-8 border-y border-white/10 bg-black/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={200 + index * 100} duration={600}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                Why Partner With Keystone?
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                We bridge the gap between your manufacturing excellence and
                Bangladesh&apos;s growing industrial demand.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={300 + index * 100} duration={500}>
                <div className="liquid-glass rounded-xl p-6 border border-white/10 h-full">
                  <reason.icon className="text-white mb-3" size={28} />
                  <h3 className="text-white font-medium mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Manufacturers */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
              What We Do For Our Manufacturing Partners
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {servicesForManufacturers.map((item, i) => (
              <FadeIn key={item} delay={300 + i * 80} duration={400}>
                <div className="liquid-glass rounded-lg p-4 border border-white/10 flex items-start gap-3">
                  <FileCheck size={16} className="text-white shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 text-center border border-white/10 max-w-2xl mx-auto">
            <MapPin className="text-white mx-auto mb-4" size={36} />
            <h2 className="text-2xl font-medium text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-gray-400 text-base mb-6">
              Ready to explore the Bangladesh market? Fill out our partnership
              application and we will schedule a discovery call within 48 hours.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Apply for Partnership
              <Handshake size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
