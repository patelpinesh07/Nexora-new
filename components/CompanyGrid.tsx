import React from 'react';
import { History, Users, Target, Trophy } from 'lucide-react';

const CompanyGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            
            {/* Card 1: Our Journey */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <History className="w-6 h-6 text-brand-600" />
               </div>
               <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Our Journey</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6">
                 Founded in 2015, we started as a small team of three. Today, we are a global agency delivering excellence across 4 continents.
               </p>
               <div className="flex items-center gap-3 text-xs font-bold text-brand-700 uppercase tracking-wider">
                 <span className="bg-brand-50 px-2 py-1 rounded">2015</span>
                 <div className="h-px flex-1 bg-brand-200"></div>
                 <span className="bg-brand-50 px-2 py-1 rounded">2024</span>
               </div>
            </div>

            {/* Card 2: Who We Are */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
               <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-indigo-600" />
               </div>
               <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Who We Are</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6">
                 We are a collective of engineers, designers, and strategists. We don't just build code; we build businesses.
               </p>
               <div className="flex -space-x-3 pt-1">
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Team" />
                 </div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Team" />
                 </div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="Team" />
                 </div>
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-600 flex items-center justify-center text-[10px] text-white font-bold">
                    +50
                 </div>
               </div>
            </div>

            {/* Card 3: Our Mission */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
               <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-teal-600" />
               </div>
               <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Our Mission</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6">
                 To simplify complexity. We believe technology should be an enabler, providing seamless solutions for modern problems.
               </p>
               <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-700">Award Winning Agency</span>
               </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyGrid;