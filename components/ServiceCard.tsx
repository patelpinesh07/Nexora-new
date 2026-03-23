import React from 'react';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <Link 
      to="/services"
      className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-slate-500 mb-6 leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="mt-auto space-y-3">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center text-xs font-semibold text-slate-600">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-200 mr-2 group-hover:bg-brand-500 transition-colors"></div>
            {feature}
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex items-center text-brand-600 font-bold text-sm">
        <span className="border-b border-transparent group-hover:border-brand-600 transition-all">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ServiceCard;