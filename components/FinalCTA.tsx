'use client';

import { ArrowRight, Check } from 'lucide-react';

const trustBadges = [
  'Zero Disruption Migration',
  '14-Day Average ROI',
  'Cancel Anytime',
  'HIPAA & GDPR Compliant',
];

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-slate-950 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold gradient-text-primary mb-6">
          Ready to Grow Your Revenue Autonomously?
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Join 500+ forward-thinking companies transforming their HubSpot with Quantum AI
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group gradient-brand text-white px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/30 flex items-center gap-2 w-full sm:w-auto justify-center">
            Start Your Transformation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group bg-transparent border-2 border-cyan-500/50 text-cyan-300 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
            Schedule Free Consultation
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold gradient-text-accent mb-2">280%</div>
            <div className="text-gray-400 text-sm">Average ROI</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text-accent mb-2">14</div>
            <div className="text-gray-400 text-sm">Days to Value</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text-accent mb-2">98%</div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
