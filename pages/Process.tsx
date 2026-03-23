import React from 'react';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery',
      desc: 'We start by listening. Understanding your goals, audience, and challenges is crucial to building the right solution.'
    },
    {
      icon: PenTool,
      title: 'Design',
      desc: 'We create wireframes and visual prototypes, ensuring the user experience is intuitive and aligns with your brand.'
    },
    {
      icon: Code2,
      title: 'Development',
      desc: 'Our engineers build your product using modern, scalable technologies, ensuring performance and security.'
    },
    {
      icon: Rocket,
      title: 'Launch & Grow',
      desc: 'We deploy your solution and continue to support you with analytics and optimizations to ensure growth.'
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            Our <span className="text-brand-600">Process</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            A transparent, agile workflow designed to deliver results on time and within budget.
          </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-10"></div>

            <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-14 h-14 bg-brand-700 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-700/20 text-xl font-bold relative z-10">
                            <step.icon className="w-6 h-6" />
                        </div>
                        <span className="absolute top-6 right-6 text-6xl font-display font-bold text-slate-100 -z-10 group-hover:text-brand-50 transition-colors">0{idx + 1}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-20 bg-brand-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-3xl font-display font-bold mb-6 relative z-10">Ready to start your journey?</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto relative z-10">Our process is proven to deliver. Let's apply it to your next big idea.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-brand-50 transition-colors relative z-10">
                Start Discovery
            </a>
        </div>
      </div>
    </div>
  );
};

export default Process;