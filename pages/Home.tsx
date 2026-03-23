import React from 'react';
import { Palette, Globe, Smartphone, Share2, PenTool, Database } from 'lucide-react';
import Hero from '../components/Hero';
import ScrollingLogos from '../components/ScrollingLogos';
import CompanyGrid from '../components/CompanyGrid';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';
import { Link } from 'react-router-dom';

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Scalable, high-performance web applications built with modern architectures like React and Next.js.',
    icon: Globe,
    features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications']
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive and delightful digital experiences for your users.',
    icon: Palette,
    features: ['User Research', 'Wireframing & Prototyping', 'Interface Design']
  },
  {
    id: '3',
    title: 'Graphics Design',
    description: 'Compelling visual storytelling that elevates your brand identity across all media channels.',
    icon: PenTool,
    features: ['Logo Design', 'Marketing Collateral', 'Brand Assets']
  },
  {
    id: '4',
    title: 'Social Media Handling',
    description: 'Comprehensive social media management to grow your audience and engagement.',
    icon: Share2,
    features: ['Content Strategy', 'Community Management', 'Paid Advertising']
  },
  {
    id: '5',
    title: 'App Development',
    description: 'Native and cross-platform mobile solutions delivering seamless experiences on iOS and Android.',
    icon: Smartphone,
    features: ['iOS & Android Apps', 'React Native', 'Maintenance']
  },
  {
    id: '6',
    title: 'Brand Identity',
    description: 'Strategic branding services to define your voice and visual presence in the market.',
    icon: Database, 
    features: ['Brand Guidelines', 'Visual Systems', 'Rebranding']
  }
];

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <ScrollingLogos />
      
      <CompanyGrid />

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl animate-fade-in">
              <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Comprehensive <br/>
                <span className="text-brand-600">Digital Services</span>
              </h2>
            </div>
            <div className="hidden md:block">
                <Link to="/services" className="relative px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm tracking-wide transition-all duration-300 inline-flex items-center justify-center hover:border-slate-900 hover:text-slate-900 hover:shadow-lg">
                    View All Services
                </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
                <Link to="/services" className="relative px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm tracking-wide transition-all duration-300 inline-flex items-center justify-center hover:border-slate-900 hover:text-slate-900 hover:shadow-lg">
                    View All Services
                </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-200/50 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                    Ready to Transform <br/>
                    Your <span className="text-brand-600">Business?</span>
                </h2>
                <p className="text-slate-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Let's collaborate to build something extraordinary. We're ready to help you navigate the future of technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="w-full sm:w-auto relative px-10 py-4 bg-brand-700 text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_12px_rgba(29,78,216,0.25)] hover:shadow-[0_8px_24px_rgba(29,78,216,0.35)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
                        Get a Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;