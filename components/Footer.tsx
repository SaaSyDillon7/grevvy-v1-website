'use client';

import { Mail, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'GREVVY ONBOARD', href: '#services' },
    { name: 'GREVVY AI', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#cta' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Compliance', href: '#' },
  ],
};

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-purple-500/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold gradient-text-accent mb-4">GREVVY</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming HubSpot with Quantum AI Technology. Grow your revenue autonomously with leadership-guided intelligence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-purple-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="mailto:hello@grevvy.com"
                className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center hover:bg-pink-500/20 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-pink-400" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => link.href.startsWith('#') && scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GREVVY LLC. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built with Quantum AI 🚀 Powered by Leadership Intelligence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
