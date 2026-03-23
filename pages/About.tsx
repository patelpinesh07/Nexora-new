import React from 'react';
import { Target, Users, Heart, Zap } from 'lucide-react';
import CompanyGrid from '../components/CompanyGrid';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            About <span className="text-brand-600">Milestone IT</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            We are more than just a tech company. We are your partners in digital transformation, committed to delivering excellence in every line of code and pixel.
          </p>
        </div>

        <div className="mb-20">
             <div className="w-full h-96 bg-slate-200 rounded-3xl overflow-hidden relative mb-12">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Team meeting" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-brand-900/20"></div>
             </div>
             <CompanyGrid />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Driven by Values</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                            <Target className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Precision</h3>
                            <p className="text-slate-500">We pay attention to every detail, ensuring our solutions are robust and pixel-perfect.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                            <Heart className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Passion</h3>
                            <p className="text-slate-500">We love what we do, and that enthusiasm shines through in our work.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Innovation</h3>
                            <p className="text-slate-500">We stay ahead of the curve, using the latest technologies to give you a competitive edge.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                    "To create a digital world where businesses of all sizes can harness the power of technology to reach their full potential, without the complexity."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="CEO" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 text-sm">Alex Morgan</p>
                        <p className="text-xs text-slate-500">CEO & Founder</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;