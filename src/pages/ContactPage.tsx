import { useState } from 'react';
import { Factory, Globe, Send, MapPin, Phone, Mail, CheckCircle, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

type FormType = 'factory' | 'manufacturer';

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>('factory');
  const [submitted, setSubmitted] = useState(false);

  const [factoryForm, setFactoryForm] = useState({
    name: '', company: '', phone: '', email: '',
    factoryType: '', employees: '', serviceInterest: '', message: '',
  });

  const [manufacturerForm, setManufacturerForm] = useState({
    companyName: '', contactName: '', email: '', phone: '',
    country: '', productCategory: '', website: '', message: '',
  });

  const handleFactorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleManufacturerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-12">
        <FadeIn delay={200} duration={600}>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Contact Us
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Whether you are a Bangladesh factory owner needing services or a
              foreign manufacturer exploring partnership — we are here to help.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Contact Info Bar */}
      <section className="px-6 md:px-12 lg:px-16 py-6 border-y border-white/10 bg-black/40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn delay={200} duration={400}>
            <a
              href="https://wa.me/8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[#25D366] text-sm font-medium group-hover:text-[#20c05a] transition-colors">+880 1941-646278</p>
                <p className="text-gray-500 text-xs">WhatsApp Business</p>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={300} duration={400}>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-white text-sm">+880 1748-646026</p>
                <p className="text-gray-500 text-xs">Phone</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={400} duration={400}>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-white text-sm">info@keystoneconsultancy.com</p>
                <p className="text-gray-500 text-xs">Email</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={500} duration={400}>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-white text-sm">Gazipur, Bangladesh</p>
                <p className="text-gray-500 text-xs">Head Office</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="px-6 md:px-12 lg:px-16 py-6">
        <FadeIn delay={200} duration={400}>
          <a
            href="https://wa.me/8801941646278"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl px-6 py-4 hover:bg-[#25D366]/15 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle size={22} className="text-[#25D366] shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Prefer WhatsApp?</p>
                <p className="text-gray-400 text-xs">Message us directly — we typically reply within 1 hour during business hours.</p>
              </div>
            </div>
            <span className="shrink-0 text-[#25D366] text-sm font-medium group-hover:underline">
              +880 1941-646278 →
            </span>
          </a>
        </FadeIn>
      </section>

      {/* Forms */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Form Toggle */}
          <FadeIn delay={200} duration={400}>
            <div className="flex gap-4 mb-8 justify-center">
              <button
                onClick={() => { setActiveForm('factory'); setSubmitted(false); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeForm === 'factory'
                    ? 'bg-white text-black'
                    : 'liquid-glass text-white hover:bg-white/10'
                }`}
              >
                <Factory size={18} />
                Factory Owner
              </button>
              <button
                onClick={() => { setActiveForm('manufacturer'); setSubmitted(false); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeForm === 'manufacturer'
                    ? 'bg-white text-black'
                    : 'liquid-glass text-white hover:bg-white/10'
                }`}
              >
                <Globe size={18} />
                Foreign Manufacturer
              </button>
            </div>
          </FadeIn>

          {submitted ? (
            <FadeIn delay={200} duration={600}>
              <div className="liquid-glass rounded-2xl p-12 text-center border border-green-500/30">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h2 className="text-2xl font-medium text-white mb-2">Thank You!</h2>
                <p className="text-gray-400">
                  We have received your inquiry and will get back to you within 24 hours.
                </p>
              </div>
            </FadeIn>
          ) : (
            <>
              {activeForm === 'factory' ? (
                <FadeIn delay={300} duration={600}>
                  <form onSubmit={handleFactorySubmit} className="liquid-glass rounded-xl p-6 md:p-8 border border-white/10">
                    <h2 className="text-xl font-medium text-white mb-6">
                      Service Inquiry — Factory Owners
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Your Name *</label>
                        <input
                          required
                          type="text"
                          value={factoryForm.name}
                          onChange={(e) => setFactoryForm({ ...factoryForm, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Company Name *</label>
                        <input
                          required
                          type="text"
                          value={factoryForm.company}
                          onChange={(e) => setFactoryForm({ ...factoryForm, company: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="Factory name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Phone / WhatsApp *</label>
                        <input
                          required
                          type="tel"
                          value={factoryForm.phone}
                          onChange={(e) => setFactoryForm({ ...factoryForm, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="+880 1XXX-XXXXXX"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Email</label>
                        <input
                          type="email"
                          value={factoryForm.email}
                          onChange={(e) => setFactoryForm({ ...factoryForm, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="email@company.com"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Factory Type</label>
                        <select
                          value={factoryForm.factoryType}
                          onChange={(e) => setFactoryForm({ ...factoryForm, factoryType: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                        >
                          <option value="" className="bg-black">Select industry</option>
                          <option value="rmg" className="bg-black">RMG / Garment</option>
                          <option value="textile" className="bg-black">Textile / Dyeing</option>
                          <option value="food" className="bg-black">Food Processing</option>
                          <option value="pharma" className="bg-black">Pharmaceutical</option>
                          <option value="plastic" className="bg-black">Plastic / Packaging</option>
                          <option value="other" className="bg-black">Other Manufacturing</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Number of Employees</label>
                        <select
                          value={factoryForm.employees}
                          onChange={(e) => setFactoryForm({ ...factoryForm, employees: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                        >
                          <option value="" className="bg-black">Select range</option>
                          <option value="1-50" className="bg-black">1 - 50</option>
                          <option value="51-200" className="bg-black">51 - 200</option>
                          <option value="201-500" className="bg-black">201 - 500</option>
                          <option value="501-1000" className="bg-black">501 - 1,000</option>
                          <option value="1000+" className="bg-black">1,000+</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-gray-400 text-xs mb-1 block">Service Interest</label>
                        <select
                          value={factoryForm.serviceInterest}
                          onChange={(e) => setFactoryForm({ ...factoryForm, serviceInterest: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                        >
                          <option value="" className="bg-black">Select service</option>
                          <option value="compliance" className="bg-black">Factory Compliance & Audits</option>
                          <option value="import" className="bg-black">Equipment Import & Registration</option>
                          <option value="energy" className="bg-black">Energy & Fuel Solutions</option>
                          <option value="consulting" className="bg-black">Industrial Consulting</option>
                          <option value="multiple" className="bg-black">Multiple Services</option>
                          <option value="other" className="bg-black">Not Sure / Need Guidance</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-gray-400 text-xs mb-1 block">Message</label>
                        <textarea
                          value={factoryForm.message}
                          onChange={(e) => setFactoryForm({ ...factoryForm, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 resize-none"
                          rows={4}
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    >
                      <Send size={18} />
                      Submit Inquiry
                    </button>
                  </form>
                </FadeIn>
              ) : (
                <FadeIn delay={300} duration={600}>
                  <form onSubmit={handleManufacturerSubmit} className="liquid-glass rounded-xl p-6 md:p-8 border border-white/10">
                    <h2 className="text-xl font-medium text-white mb-6">
                      Partnership Inquiry — Manufacturers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Company Name *</label>
                        <input
                          required
                          type="text"
                          value={manufacturerForm.companyName}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, companyName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Contact Person *</label>
                        <input
                          required
                          type="text"
                          value={manufacturerForm.contactName}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, contactName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Email *</label>
                        <input
                          required
                          type="email"
                          value={manufacturerForm.email}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="email@company.com"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={manufacturerForm.phone}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="+86 XXXX XXXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Country *</label>
                        <input
                          required
                          type="text"
                          value={manufacturerForm.country}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, country: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="China, India, etc."
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Product Category *</label>
                        <select
                          required
                          value={manufacturerForm.productCategory}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, productCategory: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                        >
                          <option value="" className="bg-black">Select category</option>
                          <option value="boilers" className="bg-black">Industrial Boilers</option>
                          <option value="generators" className="bg-black">Generators & Power</option>
                          <option value="sewing" className="bg-black">Sewing & Textile Machinery</option>
                          <option value="compressors" className="bg-black">Air Compressors</option>
                          <option value="fire-safety" className="bg-black">Fire Safety Equipment</option>
                          <option value="water-treatment" className="bg-black">Water Treatment</option>
                          <option value="food-machinery" className="bg-black">Food Processing Equipment</option>
                          <option value="other" className="bg-black">Other Industrial Equipment</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-gray-400 text-xs mb-1 block">Website / Catalog Link</label>
                        <input
                          type="url"
                          value={manufacturerForm.website}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, website: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30"
                          placeholder="https://..."
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-gray-400 text-xs mb-1 block">Message</label>
                        <textarea
                          value={manufacturerForm.message}
                          onChange={(e) => setManufacturerForm({ ...manufacturerForm, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 resize-none"
                          rows={4}
                          placeholder="Tell us about your products and partnership goals..."
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    >
                      <Send size={18} />
                      Submit Partnership Inquiry
                    </button>
                  </form>
                </FadeIn>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
