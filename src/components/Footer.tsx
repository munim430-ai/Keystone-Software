import { Link } from 'react-router';
import { Factory, Ship, Leaf, Settings, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Resources', path: '/resources' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  { label: 'Factory Compliance', path: '/services/compliance', icon: Factory },
  { label: 'Equipment Import', path: '/services/import', icon: Ship },
  { label: 'Energy Solutions', path: '/services/energy', icon: Leaf },
  { label: 'Industrial Consulting', path: '/services/consulting', icon: Settings },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
              KEYSTONE
            </Link>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Industrial solutions consultancy for Bangladesh. Helping factories
              comply, import, and optimize since 2020.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} />
                <span>info@keystoneconsultancy.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} />
                <span>+880 1748-646026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>Gazipur, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <service.icon size={14} />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-white font-medium mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="liquid-glass rounded-lg px-4 py-3">
                <p className="text-white text-sm font-medium">TIN Registered</p>
                <p className="text-gray-400 text-xs">Bangladesh NBR</p>
              </div>
              <div className="liquid-glass rounded-lg px-4 py-3">
                <p className="text-white text-sm font-medium">Trade License</p>
                <p className="text-gray-400 text-xs">Gazipur City Corp</p>
              </div>
              <div className="liquid-glass rounded-lg px-4 py-3">
                <p className="text-white text-sm font-medium">Consulting License</p>
                <p className="text-gray-400 text-xs">RJSC Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Keystone Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/resources" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/resources" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
