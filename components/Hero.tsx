import React from 'react';
import Button from './Button';
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-xs font-bold text-brand-300 tracking-wide uppercase">Innovating for the Future</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Digital Experiences</span> That Matter.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
              From web development to comprehensive branding, we provide the full spectrum of IT services needed to scale your business in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4" href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-8 py-4 border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white hover:border-white" href="/work">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Abstract Visual / Illustration */}
          <div className="relative hidden lg:block h-[600px]">
             {/* Floating Cards Mockup */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                
                {/* Center Main Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl animate-float flex flex-col items-center justify-center p-8 z-20">
                    <Globe className="w-20 h-20 text-brand-500 mb-6" />
                    <div className="w-full h-2 bg-slate-800 rounded-full mb-3"></div>
                    <div className="w-2/3 h-2 bg-slate-800 rounded-full mb-6"></div>
                    <div className="w-full h-24 bg-gradient-to-br from-brand-500/20 to-indigo-500/20 rounded-xl border border-white/5"></div>
                </div>

                {/* Left Card */}
                <div className="absolute top-[30%] left-[10%] w-64 h-72 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-2xl shadow-xl animate-float flex flex-col items-center justify-center p-6 z-10" style={{ animationDelay: '1.5s' }}>
                    <Code2 className="w-12 h-12 text-indigo-400 mb-4" />
                    <div className="w-full h-2 bg-slate-700 rounded-full mb-2"></div>
                    <div className="w-1/2 h-2 bg-slate-700 rounded-full"></div>
                </div>

                {/* Right Card */}
                <div className="absolute bottom-[20%] right-[10%] w-64 h-72 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-2xl shadow-xl animate-float flex flex-col items-center justify-center p-6 z-10" style={{ animationDelay: '0.5s' }}>
                    <Cpu className="w-12 h-12 text-teal-400 mb-4" />
                    <div className="w-full h-2 bg-slate-700 rounded-full mb-2"></div>
                    <div className="w-3/4 h-2 bg-slate-700 rounded-full"></div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;