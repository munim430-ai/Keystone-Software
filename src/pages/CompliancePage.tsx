import { Link } from 'react-router';
import { Factory, Check, ArrowLeft, FileText, Shield, AlertTriangle, ClipboardCheck } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const services = [
  {
    icon: FileText,
    title: 'Boiler Registration & Renewal',
    desc: 'Complete handling of boiler registration with the Office of the Chief Inspector of Boilers. Includes new registration, annual renewal, and transfer of ownership.',
  },
  {
    icon: Shield,
    title: 'Safety Inspection Preparation',
    desc: 'Pre-inspection audits to identify and fix issues before official inspections. We ensure your boilers, pressure vessels, and safety systems meet all requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Foreign Buyer Compliance',
    desc: 'Prepare your factory for BSCI, WRAP, Sedex, and custom buyer audits. Documentation, facility upgrades, and staff training — all managed by us.',
  },
  {
    icon: AlertTriangle,
    title: 'Environmental Clearance (DoE)',
    desc: 'Department of Environment clearance application, EIA preparation, and ongoing compliance reporting for industrial units.',
  },
  {
    icon: Factory,
    title: 'Fire Safety Certificate',
    desc: 'Fire safety system assessment, equipment procurement, and certification from Bangladesh Fire Service & Civil Defence.',
  },
  {
    icon: FileText,
    title: 'Factory License Renewal',
    desc: 'Annual factory license renewal with the Directorate of Inspection for Factories and Establishments (DIFE).',
  },
];

const compliancePackages = [
  {
    name: 'Basic Package',
    price: 'BDT 15,000',
    features: [
      'Boiler registration/renewal',
      'Basic safety inspection',
      'Document preparation',
      '1 follow-up visit',
    ],
  },
  {
    name: 'Standard Package',
    price: 'BDT 35,000',
    features: [
      'Everything in Basic',
      'Full safety audit',
      'Fire safety assessment',
      'Environmental compliance check',
      '3 follow-up visits',
    ],
  },
  {
    name: 'Enterprise Package',
    price: 'Custom',
    features: [
      'Everything in Standard',
      'Foreign buyer audit prep (BSCI/WRAP)',
      'Dedicated account manager',
      'Monthly compliance monitoring',
      'Priority support',
    ],
  },
];

export default function CompliancePage() {
  return (
    <div className="relative z-10">
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        {/* Back */}
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
            <Factory className="text-white" size={40} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Factory Compliance & Audits
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Navigate Bangladesh&apos;s complex regulatory landscape with confidence.
            We handle boiler registrations, safety inspections, and foreign buyer
            compliance — so you can focus on production.
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

      {/* Packages */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                Compliance Packages
              </h2>
              <p className="text-gray-400 text-base">
                Transparent pricing. No hidden fees.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compliancePackages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={300 + i * 150} duration={600}>
                <div className={`liquid-glass rounded-xl p-6 border ${i === 1 ? 'border-white/30' : 'border-white/10'} h-full flex flex-col`}>
                  <h3 className="text-white font-medium text-lg mb-1">{pkg.name}</h3>
                  <p className="text-2xl font-semibold text-white mb-4">{pkg.price}</p>
                  <ul className="space-y-2 mt-auto">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Check size={16} className="text-white shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
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
              Get Compliant Today
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Don&apos;t risk penalties or failed audits. Let us handle your compliance
              requirements professionally.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Request Compliance Audit
              <Factory size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
