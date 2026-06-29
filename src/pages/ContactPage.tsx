import { useState } from 'react';
import { Factory, Globe, Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FadeIn delay={200} duration={400}>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gray-400" />
              <div>
                <p className="text-white text-sm">+880 1748-646026</p>
                <p className="text-gray-500 text-xs">Phone / WhatsApp</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={300} duration={400}>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gray-400" />
              <div>
                <p className="text-white text-sm">info@keystoneconsultancy.com</p>
                <p className="text-gray-500 text-xs">Email</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={400} duration={400}>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-400" />
              <div>
                <p className="text-white text-sm">Gazipur, Bangladesh</p>
                <p className="text-gray-500 text-xs">Head Office</p>
              </div>
            </div>
          </FadeIn>
        </div>
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
