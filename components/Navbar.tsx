import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-sm border-b border-slate-100' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-700/20 group-hover:scale-105 transition-transform">
            <Hexagon className="w-6 h-6 text-white fill-white/20" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">Milestone IT</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-semibold transition-colors ${location.pathname === link.href ? 'text-brand-700' : 'text-slate-500 hover:text-brand-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="px-6 py-2.5 bg-brand-700 text-white rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-brand-600">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-lg font-medium text-slate-700 hover:text-brand-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mt-2 w-full py-3 bg-brand-700 text-white rounded-lg font-semibold text-center shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;