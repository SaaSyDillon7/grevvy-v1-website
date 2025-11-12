'use client';

import { useState, useEffect } from 'react';
import { Settings, Cog, TrendingUp, Play, Pause, Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Settings,
    title: 'Discovery & Setup',
    description: 'We analyze your business model, leadership vision, and current systems to create a customized implementation plan.',
    duration: '2-7 Days',
  },
  {
    id: 2,
    icon: Cog,
    title: 'AI-Powered Automation',
    description: 'Deploy quantum-enhanced workflows, integrate your tech stack, and train AI agents on your specific business processes.',
    duration: '7-14 Days',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'AI monitors performance, identifies opportunities, and automatically optimizes your HubSpot for maximum ROI.',
    duration: 'Ongoing',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From setup to scale - our proven 3-step process delivers results in weeks, not months
          </p>
        </div>

        {/* Workflow Demo */}
        <div className="max-w-5xl mx-auto">
          {/* Play/Pause Control */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-colors text-purple-200"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pause Demo</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Play Demo</span>
                </>
              )}
            </button>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-start gap-6 p-6 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? 'gradient-card-purple border-purple-500 shadow-2xl shadow-purple-500/20 scale-105'
                      : isCompleted
                      ? 'gradient-card-cyan border-green-500/50'
                      : 'bg-slate-900/50 border-slate-700'
                  }`}
                  onClick={() => setActiveStep(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isActive
                        ? 'gradient-brand border-purple-400'
                        : isCompleted
                        ? 'bg-green-500 border-green-400'
                        : 'bg-slate-800 border-slate-600'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-8 h-8 text-white" />
                    ) : (
                      <step.icon
                        className={`w-8 h-8 ${
                          isActive ? 'text-white' : 'text-gray-400'
                        } ${isActive ? 'animate-pulse' : ''}`}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-2xl font-bold ${
                          isActive || isCompleted ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isActive
                            ? 'bg-purple-500/20 text-purple-200'
                            : 'bg-slate-700 text-gray-400'
                        }`}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p
                      className={`text-lg ${
                        isActive || isCompleted ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500/20 rounded-b-2xl overflow-hidden">
                      <div
                        className="h-full gradient-brand"
                        style={{
                          animation: 'progress 2.5s linear',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
