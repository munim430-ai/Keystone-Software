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
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="Keystone" className="h-10 w-auto" />
              <span className="text-xl font-semibold tracking-tight text-white">KEYSTONE</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Industrial solutions consultancy for Bangladesh. Helping factories
              comply, import, and optimize since 2020.
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href="https://wa.me/8801941646278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#20c05a] text-sm transition-colors group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>+880 1941-646278 (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} className="shrink-0" />
                <span>+880 1748-646026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} className="shrink-0" />
                <span>info@keystoneconsultancy.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="shrink-0" />
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
