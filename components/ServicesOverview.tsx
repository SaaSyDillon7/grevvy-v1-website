'use client';

import { Zap, Brain, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Zap,
    name: 'GREVVY ONBOARD',
    description: 'Complete HubSpot setup and migration in as little as 24 hours',
    priceRange: '$499 DIY to $7,500 Full Automation',
    gradient: 'gradient-card-purple',
    features: [
      'Zero disruption CRM migration',
      'Custom portal configuration',
      'Data architecture & cleanup',
      'Process workflows & automation',
      'Team training & documentation',
    ],
    buttonText: 'Explore Onboarding',
    buttonHref: '#pricing',
  },
  {
    icon: Brain,
    name: 'GREVVY AI',
    description: 'Subscription-based AI optimization that continuously improves your HubSpot',
    priceRange: '$99/mo Auditor to $1,249/mo RevOps AI',
    gradient: 'gradient-card-cyan',
    features: [
      'AI-powered performance audits',
      'Competitive intelligence analysis',
      'Automated workflow optimization',
      'Executive leadership dashboards',
      'Continuous learning & adaptation',
    ],
    buttonText: 'Discover AI Services',
    buttonHref: '#pricing',
  },
];

export default function ServicesOverview() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From rapid onboarding to continuous AI optimization - we transform your HubSpot at every stage
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`${service.gradient} border border-purple-500/30 rounded-2xl p-8 md:p-10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 glass-card`}
              style={{
                animation: 'var(--animate-scale-in)',
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'backwards',
              }}
            >
              {/* Icon */}
              <div className="gradient-brand w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-3xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-lg text-gray-300 mb-4">{service.description}</p>

              {/* Price Range */}
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg mb-6">
                <p className="text-purple-200 font-semibold">{service.priceRange}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection(service.buttonHref)}
                className="group w-full gradient-brand text-white px-6 py-4 rounded-lg font-medium text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
              >
                {service.buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
