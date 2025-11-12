'use client';

import { useState } from 'react';
import { Check, Zap, TrendingUp, Sparkles, Crown } from 'lucide-react';

const pricingTiers = {
  diy: [
    {
      name: 'GUIDE',
      price: '$499',
      description: '24-hour self-service implementation guide',
      badge: '24 HOURS',
      badgeColor: 'bg-purple-500',
      gradient: 'gradient-card-purple',
      features: [
        'Complete implementation roadmap',
        'Video tutorials & documentation',
        'Email support (48hr response)',
        'Template library access',
        'Basic automation setup',
      ],
      cta: 'Get Started',
    },
    {
      name: 'BASIC',
      price: '$899',
      description: 'Essential setup with AI assistance',
      badge: '7 DAYS',
      badgeColor: 'bg-cyan-500',
      gradient: 'gradient-card-cyan',
      features: [
        'Everything in GUIDE, plus:',
        'AI-guided configuration',
        'Data migration assistance',
        'Custom workflow setup (3)',
        'Team training session (2hrs)',
      ],
      cta: 'Choose Basic',
    },
    {
      name: 'GROWTH',
      price: '$1,500',
      description: 'Complete onboarding with quantum AI',
      badge: '21 DAYS',
      badgeColor: 'bg-pink-500',
      gradient: 'gradient-card-pink',
      popular: true,
      features: [
        'Everything in BASIC, plus:',
        'Full data migration & cleanup',
        'Custom automation (10+ workflows)',
        'Executive dashboard setup',
        'Competitive analysis integration',
        '1 month AI Auditor included',
      ],
      cta: 'Most Popular',
    },
    {
      name: 'AUTOMATE',
      price: '$2,500',
      description: 'Enterprise-grade full automation',
      badge: '21 DAYS',
      badgeColor: 'bg-blue-500',
      gradient: 'gradient-card-blue',
      features: [
        'Everything in GROWTH, plus:',
        'Advanced API integrations',
        'Multi-portal configuration',
        'Custom AI agent training',
        'White-glove migration',
        '3 months AI subscription included',
      ],
      cta: 'Go Enterprise',
    },
  ],
  dfy: [
    {
      name: 'AUDITOR',
      price: '$99',
      priceUnit: '/month',
      description: 'AI-powered performance monitoring',
      gradient: 'gradient-card-purple',
      features: [
        'Monthly AI performance audit',
        'Optimization recommendations',
        'Competitive intelligence report',
        'Email support',
        'Cancel anytime',
      ],
      cta: 'Start Auditing',
    },
    {
      name: 'OPTIMIZER',
      price: '$399',
      priceUnit: '/month',
      description: 'Continuous AI optimization',
      gradient: 'gradient-card-cyan',
      features: [
        'Everything in AUDITOR, plus:',
        'Automated workflow improvements',
        'Bi-weekly optimization sprints',
        'Custom dashboard creation',
        'Slack/Teams integration',
        'Priority support',
      ],
      cta: 'Choose Optimizer',
    },
    {
      name: 'GROWTH AI',
      price: '$699',
      priceUnit: '/month',
      description: 'Full-service RevOps AI team',
      popular: true,
      gradient: 'gradient-card-pink',
      features: [
        'Everything in OPTIMIZER, plus:',
        'Dedicated AI RevOps specialist',
        'Weekly strategy sessions',
        'Advanced automation builds',
        'Leadership reporting dashboard',
        'Competitive analysis',
      ],
      cta: 'Scale Revenue',
    },
    {
      name: 'REVOPS AI',
      price: '$1,249',
      priceUnit: '/month',
      description: 'Enterprise RevOps command center',
      gradient: 'gradient-card-blue',
      features: [
        'Everything in GROWTH AI, plus:',
        'Full RevOps team integration',
        'Custom AI agent development',
        'Real-time executive dashboards',
        'Multi-department coordination',
        'Quantum performance optimization',
      ],
      cta: 'Enterprise Access',
    },
  ],
};

export default function Pricing() {
  const [selectedTab, setSelectedTab] = useState<'diy' | 'dfy'>('diy');

  const currentTiers = pricingTiers[selectedTab];

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your path to transformation - DIY guidance or done-for-you service
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-900 border border-purple-500/30 rounded-lg p-1">
            <button
              onClick={() => setSelectedTab('diy')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedTab === 'diy'
                  ? 'gradient-brand text-white shadow-lg'
                  : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              DIY Implementation
            </button>
            <button
              onClick={() => setSelectedTab('dfy')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedTab === 'dfy'
                  ? 'gradient-brand text-white shadow-lg'
                  : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              Done-For-You AI
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative ${tier.gradient} border ${
                tier.popular ? 'border-purple-400 ring-2 ring-purple-400' : 'border-purple-500/30'
              } rounded-2xl p-6 hover:scale-105 transition-all duration-300 glass-card flex flex-col`}
              style={{
                animation: 'var(--animate-scale-in)',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards',
              }}
            >
              {/* Most Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-brand px-4 py-1 rounded-full text-white text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Crown className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Tier Name & Badge */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                {'badge' in tier && tier.badge && (
                  <span className={`inline-block ${'badgeColor' in tier ? tier.badgeColor : 'bg-purple-500'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {tier.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-4xl font-bold text-white">
                  {tier.price}
                  {'priceUnit' in tier && tier.priceUnit && <span className="text-lg text-gray-400">{tier.priceUnit}</span>}
                </div>
                <p className="text-gray-400 text-sm mt-2">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full gradient-brand text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-gray-400">
          <p className="text-sm">
            All prices in USD. Enterprise custom pricing available. No long-term contracts required.
          </p>
        </div>
      </div>
    </section>
  );
}
