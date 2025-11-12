'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does onboarding take?',
    answer: 'Implementation time ranges from 24 hours for our DIY GUIDE package to 21 days for full enterprise automation. Most clients see their first results within the first week, with full ROI typically achieved within 14 days of going live.',
  },
  {
    question: 'What makes GREVVY different from other HubSpot partners?',
    answer: 'GREVVY uniquely combines quantum AI technology with leadership-guided intelligence. Unlike traditional implementations that just configure software, our AI learns your business model, embeds your leadership vision into workflows, and continuously optimizes performance. We\'re the only solution that transforms HubSpot into a truly autonomous revenue engine.',
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Absolutely! We provide adaptive AI-powered training that customizes to your team\'s learning pace. All packages include documentation, video tutorials, and support. Higher tiers include live training sessions, dedicated specialists, and priority access to our team. Our AI continuously monitors for optimization opportunities and provides proactive recommendations.',
  },
  {
    question: 'Can you migrate data from our current system?',
    answer: 'Yes! We support migration from 50+ platforms including Salesforce, Pipedrive, Monday, Excel, and custom databases. Our zero-disruption migration process includes data cleanup, deduplication, architecture optimization, and validation. We handle everything from simple contact imports to complex multi-system integrations.',
  },
  {
    question: 'What ongoing support do you offer?',
    answer: 'Our AI subscription tiers ($99-$1,249/month) provide continuous optimization, performance monitoring, competitive analysis, and automated improvements. Even without a subscription, onboarding clients receive 30 days of post-launch support. We also offer ad-hoc consulting, emergency support, and custom development as needed.',
  },
  {
    question: 'Do you work with businesses outside the US?',
    answer: 'Yes! We serve clients globally and support HubSpot implementations in 29+ languages. Our AI can be configured for regional compliance requirements including GDPR, CCPA, HIPAA, and industry-specific regulations. Time zone differences are managed through asynchronous workflows and scheduled check-ins.',
  },
  {
    question: 'What if we already have HubSpot set up?',
    answer: 'Perfect! Our AI Auditor ($99/mo) analyzes your current setup, identifies inefficiencies, and provides optimization recommendations. We can enhance existing configurations, fix broken automations, add advanced features, or complete a full transformation while preserving your data and active campaigns.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about transforming your HubSpot
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="gradient-card-purple border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400 transition-colors duration-300"
              style={{
                animation: 'var(--animate-fade-in)',
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'backwards',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-500/10 transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Still have questions? We're here to help.</p>
          <button className="gradient-brand text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
