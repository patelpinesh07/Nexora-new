import React from 'react';
import { Hexagon, Globe, Server, Code2, Database, Shield } from 'lucide-react';

const ScrollingLogos: React.FC = () => {
  const companies = [
    { name: "Milestone IT", icon: Hexagon },
    { name: "TechFlow", icon: Globe },
    { name: "DataCore", icon: Database },
    { name: "CodeSmiths", icon: Code2 },
    { name: "SecureNet", icon: Shield },
    { name: "CloudScale", icon: Server },
  ];

  const items = [...companies, ...companies, ...companies];

  return (
    <div className="w-full bg-white border-y border-slate-100 py-6 overflow-hidden relative z-20">
      
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-scroll w-[300%]">
          {items.map((company, idx) => (
            <div key={idx} className="flex items-center justify-center min-w-[200px] gap-2 text-slate-400 hover:text-brand-700 transition-colors duration-300 px-6 cursor-default group">
              <company.icon className="w-5 h-5" />
              <span className="text-base font-display font-bold uppercase tracking-wider group-hover:text-slate-900 transition-colors">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;