'use client';

import { TrendingUp, Clock, Target, DollarSign, Building2 } from 'lucide-react';

const caseStudies = [
  {
    company: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    challenge: 'Struggling with lead quality and sales pipeline visibility across multiple products.',
    solution: 'GREVVY ONBOARD + AI Subscription (Growth tier)',
    metrics: [
      { label: 'Lead Increase', value: '+340%', icon: TrendingUp, color: 'text-green-400' },
      { label: 'Conversion Rate', value: '+85%', icon: Target, color: 'text-purple-400' },
      { label: 'Implementation', value: '14 days', icon: Clock, color: 'text-cyan-400' },
      { label: 'ROI', value: '420%', icon: DollarSign, color: 'text-yellow-400' },
    ],
    quote: '"GREVVY transformed our HubSpot from a basic CRM into an intelligent revenue engine. The AI continuously finds optimization opportunities we never would have discovered."',
    author: 'Sarah Chen, VP of Revenue Operations',
    gradient: 'gradient-card-purple',
  },
  {
    company: 'HealthCore Medical',
    industry: 'Healthcare',
    challenge: 'Complex patient journey tracking and compliance requirements slowing down operations.',
    solution: 'GREVVY ONBOARD Enterprise + RevOps AI',
    metrics: [
      { label: 'Lead Increase', value: '+220%', icon: TrendingUp, color: 'text-green-400' },
      { label: 'Conversion Rate', value: '+150%', icon: Target, color: 'text-purple-400' },
      { label: 'Implementation', value: '21 days', icon: Clock, color: 'text-cyan-400' },
      { label: 'ROI', value: '580%', icon: DollarSign, color: 'text-yellow-400' },
    ],
    quote: '"The compliance-aware automation and HIPAA-ready workflows saved us months of development time. The leadership dashboards give us real-time insights into patient acquisition."',
    author: 'Dr. Michael Rodriguez, Chief Operating Officer',
    gradient: 'gradient-card-cyan',
  },
  {
    company: 'GrowthLab Agency',
    industry: 'Marketing',
    challenge: 'Managing 50+ client campaigns with limited resources and inconsistent reporting.',
    solution: 'GREVVY ONBOARD Basic + AI Auditor',
    metrics: [
      { label: 'Lead Increase', value: '+180%', icon: TrendingUp, color: 'text-green-400' },
      { label: 'Conversion Rate', value: '+95%', icon: Target, color: 'text-purple-400' },
      { label: 'Implementation', value: '7 days', icon: Clock, color: 'text-cyan-400' },
      { label: 'ROI', value: '310%', icon: DollarSign, color: 'text-yellow-400' },
    ],
    quote: '"The AI-powered automation handles routine tasks while we focus on strategy. Client satisfaction scores jumped 40% in the first quarter after implementation."',
    author: 'Jennifer Park, Founder & CEO',
    gradient: 'gradient-card-pink',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real companies, real results - see how GREVVY has transformed businesses across industries
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.company}
              className={`${study.gradient} border border-purple-500/30 rounded-2xl p-8 md:p-10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 glass-card`}
              style={{
                animation: 'var(--animate-fade-in)',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards',
              }}
            >
              {/* Company Header */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="gradient-brand w-12 h-12 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{study.company}</h3>
                  <span className="text-purple-300 text-sm font-medium">{study.industry}</span>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2 text-sm uppercase tracking-wide">Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-center">
                    <metric.icon className={`w-6 h-6 ${metric.color} mx-auto mb-2`} />
                    <div className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-purple-500 pl-6 py-2 mb-4">
                <p className="text-lg text-gray-300 italic mb-3">{study.quote}</p>
                <footer className="text-purple-300 font-medium">— {study.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
