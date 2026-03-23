import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive financial analytics dashboard for a leading banking institution.'
  },
  {
    title: 'EcoStore Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    description: 'A sustainable shopping application available on iOS and Android.'
  },
  {
    title: 'Neon Brand Identity',
    category: 'Graphics Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    description: 'Complete rebranding and visual identity for a modern lifestyle startup.'
  },
  {
    title: 'HealthPlus Portal',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Patient management system with focus on accessibility and ease of use.'
  }
];

const Work: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            Our <span className="text-brand-600">Work</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            A selection of projects that showcase our passion for quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-xl">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105 transform" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-brand-400 font-bold text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
                        <button className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                            View Case Study <ExternalLink className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;