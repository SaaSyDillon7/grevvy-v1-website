'use client';

import { Brain, Zap, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Leadership-Guided AI',
    description: 'Your vision embedded into every HubSpot interaction. AI that thinks like your leadership team.',
    gradient: 'gradient-card-purple',
  },
  {
    icon: Zap,
    title: 'Quantum Performance',
    description: 'Low-cost, high-power solutions that deliver enterprise-grade results without the enterprise price tag.',
    gradient: 'gradient-card-cyan',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Evolution',
    description: 'AI-driven optimization that learns from your data and adapts to your changing business needs.',
    gradient: 'gradient-card-pink',
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            Why GREVVY?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The only HubSpot solution that combines quantum AI, leadership intelligence, and continuous optimization
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`${value.gradient} border border-purple-500/30 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 glass-card`}
              style={{
                animation: 'var(--animate-fade-in)',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards',
              }}
            >
              {/* Icon */}
              <div className="gradient-brand w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
