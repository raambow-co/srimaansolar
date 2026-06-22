import { Sun, Mail, Phone, MapPin } from 'lucide-react';
import srimaanLogo from '../assets/srimaan-solar.png';

const FacebookIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Solar Solutions', href: '#services' },
    { name: 'Subsidy Guide', href: '#subsidy' },
    { name: 'Projects Portfolio', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Calculate Savings', href: '#calculator' },
    { name: 'Get Free Quote', href: '#contact' },
    { name: 'PM Surya Ghar', href: 'https://pmsuryaghar.gov.in', target: '_blank', rel: 'noopener noreferrer' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, href: 'https://facebook.com' },
    { name: 'Twitter', icon: <TwitterIcon />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <InstagramIcon />, href: 'https://www.instagram.com/srimaan_solar/' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="inline-block p-1.5 bg-white rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={srimaanLogo}
                alt="Srimaan Solar Solutions"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Authorized solar vendors in Telangana & Andhra Pradesh, providing high-efficiency rooftop solar systems under central government subsidy schemes.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-solar-orange hover:text-white rounded-xl transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="hover:text-solar-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-solar-orange shrink-0 mt-0.5" />
                <span>
                  Srimaan Solar Solutions,<br />
                  Plot 45, Jubilee Hills,<br />
                  Hyderabad, Telangana, 500033<br />
                  (Serving Telangana & Andhra Pradesh)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-eco-green shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-solar-orange shrink-0" />
                <a href="mailto:support@srimaansolar.com" className="hover:text-white transition-colors">
                  support@srimaansolar.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-500 gap-4">
          <p>© Copyright 2026 Srimaan Solar Solutions. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:underline">Privacy Policy</a>
            <a href="#about" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
