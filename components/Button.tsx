import React from 'react';
import { Link } from 'react-router-dom';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps | AnchorProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  
  const baseStyles = "relative px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden group inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: `
      bg-brand-700 text-white border border-transparent
      shadow-[0_4px_12px_rgba(29,78,216,0.25)]
      hover:shadow-[0_8px_24px_rgba(29,78,216,0.35)]
      hover:-translate-y-0.5
    `,
    secondary: `
      bg-slate-50 text-slate-900 border border-slate-200
      hover:bg-white hover:border-slate-300
      hover:shadow-md hover:-translate-y-0.5
    `,
    outline: `
      bg-transparent border border-slate-300 text-slate-600
      hover:border-slate-900 hover:text-slate-900
    `
  };

  const content = (
    <>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    // Check if it's an internal link
    if (href.startsWith('/')) {
        return (
            <Link to={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;