import React from 'react';
import { Palette, Globe, Smartphone, Share2, PenTool, Database, Code, Cloud, Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';

const allServices: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Scalable, high-performance web applications built with modern architectures like React, Next.js, and Node.js.',
    icon: Globe,
    features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'CMS Development']
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive and delightful digital experiences. We focus on usability and aesthetics.',
    icon: Palette,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Interface Design']
  },
  {
    id: '3',
    title: 'Graphics Design',
    description: 'Compelling visual storytelling that elevates your brand identity. From logos to marketing materials, we cover it all.',
    icon: PenTool,
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Illustrations']
  },
  {
    id: '4',
    title: 'Social Media Handling',
    description: 'Strategic social media management to grow your audience, engage your community, and drive conversions.',
    icon: Share2,
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics Reporting']
  },
  {
    id: '5',
    title: 'App Development',
    description: 'Native and cross-platform mobile solutions delivering seamless experiences on both iOS and Android devices.',
    icon: Smartphone,
    features: ['iOS & Android Apps', 'React Native', 'App Maintenance', 'App Store Optimization']
  },
  {
    id: '6',
    title: 'Brand Identity',
    description: 'We build brands that last. Our strategic approach ensures your brand resonates with your target audience.',
    icon: Database, 
    features: ['Brand Strategy', 'Naming', 'Visual Identity Systems', 'Rebranding']
  },
  {
    id: '7',
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to improve your visibility and ranking on major search engines like Google.',
    icon: Search,
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building']
  },
  {
    id: '8',
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure setup and management for growing businesses on AWS or Azure.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Security & Compliance']
  },
  {
    id: '9',
    title: 'Custom Software',
    description: 'Tailor-made software solutions designed to address your specific business challenges and operational needs.',
    icon: Code,
    features: ['Enterprise Software', 'Workflow Automation', 'API Integration', 'Legacy Modernization']
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            World-Class <span className="text-brand-600">IT Services</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            We offer a comprehensive suite of digital services designed to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;