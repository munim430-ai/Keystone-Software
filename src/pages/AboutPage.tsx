import { Link } from 'react-router';
import { Shield, Users, FileCheck, MapPin, Award, Target, TrendingUp } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const stats = [
  { value: '50+', label: 'Factory Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Compliance Rate' },
  { value: '25M+', label: 'BDT Equipment Imported' },
];

const team = [
  {
    name: 'Munim Hasan',
    role: 'Founder & Managing Director',
    bio: 'Industrial consultant with deep expertise in Bangladesh factory compliance, China-Bangladesh trade, and boiler regulations. Built Keystone from the ground up to bridge the gap between local factories and global standards.',
  },
  {
    name: 'Electrical Engineer (Brother)',
    role: 'Technical Director',
    bio: 'Qualified electrical engineer specializing in industrial boiler systems, energy audits, and factory electrical infrastructure. Leads all technical assessments and equipment evaluation.',
  },
];

const milestones = [
  { year: '2020', title: 'Founded', desc: 'Keystone Consultancy established in Gazipur' },
  { year: '2021', title: 'First Compliance Audit', desc: 'Completed first major factory compliance audit' },
  { year: '2022', title: 'China Partnership', desc: 'Established direct partnerships with Chinese manufacturers' },
  { year: '2023', title: '50th Client', desc: 'Served 50th factory client across Bangladesh' },
  { year: '2024', title: 'Energy Division', desc: 'Launched dedicated biomass & energy solutions division' },
  { year: '2025', title: 'Nationwide Coverage', desc: 'Expanded coverage to all major industrial zones' },
];

export default function AboutPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={600}>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              About Keystone
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              We are Bangladesh&apos;s trusted industrial consultancy, built by factory
              people for factory people. Our mission is simple: make compliance easy,
              imports affordable, and energy sustainable.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 lg:px-16 py-8 border-y border-white/10 bg-black/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={200 + index * 100} duration={600}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <p>
                    Keystone Consultancy was born from frustration. In 2020, we watched
                    factory owners struggle with boiler inspections, pay inflated prices
                    for imported equipment, and miss out on energy savings that could
                    transform their bottom line.
                  </p>
                  <p>
                    We started with one simple service: helping factories pass their
                    boiler compliance audits. Word spread quickly. Within a year, we had
                    clients across Gazipur, Dhaka, and Chattogram.
                  </p>
                  <p>
                    Today, Keystone is a full-service industrial consultancy. We handle
                    everything from TIN registration for new factories to sourcing
                    multi-million-taka production lines from China. But our core mission
                    remains unchanged — make industrial success accessible to every
                    Bangladesh factory owner.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {milestones.map((m, index) => (
                  <FadeIn key={m.year} delay={300 + index * 100} duration={500}>
                    <div className="liquid-glass rounded-lg p-4 border border-white/10 flex items-start gap-4">
                      <div className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-md shrink-0">
                        {m.year}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{m.title}</p>
                        <p className="text-gray-400 text-xs">{m.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                Our Team
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                A lean team with deep expertise. We keep our overhead low so your costs stay low.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={300 + index * 150} duration={600}>
                <div className="liquid-glass-strong rounded-xl p-6 border border-white/10">
                  <Users className="text-white mb-4" size={28} />
                  <h3 className="text-white font-medium text-lg">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Coverage */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Licenses */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                  Licenses & Registration
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: FileCheck, title: 'TIN Certificate', desc: 'National Board of Revenue (NBR), Bangladesh' },
                    { icon: Shield, title: 'Trade License', desc: 'Gazipur City Corporation' },
                    { icon: Award, title: 'RJSC Registration', desc: 'Registrar of Joint Stock Companies' },
                    { icon: Target, title: 'BOI Agent License', desc: 'Bangladesh Investment Development Authority' },
                  ].map((license, index) => (
                    <FadeIn key={license.title} delay={300 + index * 100} duration={500}>
                      <div className="liquid-glass rounded-lg p-4 border border-white/10 flex items-start gap-4">
                        <license.icon className="text-white shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="text-white text-sm font-medium">{license.title}</p>
                          <p className="text-gray-400 text-xs">{license.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* Coverage */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                  Coverage Areas
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Gazipur', 'Dhaka', 'Narayanganj', 'Chattogram',
                    'Savar', 'Ashulia', 'Tongi', 'Kashimpur',
                  ].map((area, index) => (
                    <FadeIn key={area} delay={300 + index * 80} duration={400}>
                      <div className="liquid-glass rounded-lg p-3 border border-white/10 flex items-center gap-2">
                        <MapPin size={14} className="text-gray-400" />
                        <span className="text-gray-300 text-sm">{area}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <FadeIn delay={800} duration={500}>
                  <div className="mt-6 liquid-glass rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={16} className="text-white" />
                      <p className="text-white text-sm font-medium">Expanding Nationwide</p>
                    </div>
                    <p className="text-gray-400 text-xs">
                      We are actively expanding to Mymensingh, Sylhet, and Khulna industrial zones.
                      Contact us if your area is not listed — we likely serve it already.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Work With Us
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Whether you need compliance support, equipment import, or energy consulting —
              we are ready to help.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get in Touch
              <MapPin size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
