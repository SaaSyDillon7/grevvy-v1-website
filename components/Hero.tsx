'use client';

import { Sparkles, ArrowRight, Play } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero-bg">
      {/* Particle Background */}
      <ParticleBackground count={50} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8 animate-[pulse-slow_3s_ease-in-out_infinite]"
          style={{ animation: 'var(--animate-pulse-slow)' }}
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-sm md:text-base text-purple-200 font-medium">
            Quantum AI-Powered HubSpot Solutions
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ animation: 'var(--animate-fade-in)' }}
        >
          <span className="block gradient-text-primary">
            Transform Your
          </span>
          <span className="block gradient-text-primary mt-2">
            HubSpot Into an
          </span>
          <span className="block gradient-text-accent mt-2">
            AI Powerhouse
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
          style={{ animation: 'var(--animate-fade-in)', animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          Grow Your Revenue Autonomously with AI Agents, Quantum Automation, and Leadership-Guided Intelligence
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          style={{ animation: 'var(--animate-fade-in)', animationDelay: '0.4s', animationFillMode: 'backwards' }}
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('#cta')}
            className="group gradient-brand text-white px-8 py-4 rounded-lg font-medium text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollToSection('#how-it-works')}
            className="group bg-transparent border-2 border-purple-500/50 text-purple-300 px-8 py-4 rounded-lg font-medium text-lg hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            See How It Works
          </button>
        </div>

        {/* Trust Indicators */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
          style={{ animation: 'var(--animate-fade-in)', animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>280% Average ROI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>14-Day Time to Value</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span>500+ Companies Transformed</span>
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-5" />
    </section>
  );
}
