'use client';

import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Clock, Users, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    icon: TrendingUp,
    value: 280,
    suffix: '%',
    label: 'Average ROI',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Clock,
    value: 14,
    suffix: ' Days',
    label: 'Time to Value',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Star,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Companies Transformed',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
];

function CountUpNumber({ end, duration = 2000, suffix = '', inView }: { end: number; duration?: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Results() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="results" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our clients don't just see improvements - they experience transformations
          </p>
        </div>

        {/* Metrics Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="gradient-card-purple border border-purple-500/30 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 glass-card text-center"
              style={{
                animation: 'var(--animate-scale-in)',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards',
              }}
            >
              {/* Icon */}
              <div className={`${metric.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>

              {/* Value */}
              <div className={`text-5xl md:text-6xl font-bold ${metric.color} mb-2`}>
                <CountUpNumber end={metric.value} suffix={metric.suffix} inView={inView} />
              </div>

              {/* Label */}
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Statement */}
        <div className="mt-16 text-center">
          <p className="text-2xl text-gray-300 font-medium">
            Join <span className="gradient-text-accent font-bold">500+ companies</span> transforming their HubSpot with GREVVY
          </p>
        </div>
      </div>
    </section>
  );
}
