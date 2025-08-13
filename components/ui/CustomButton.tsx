import React from 'react';

interface CustomButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  target,
  rel,
  className = '',
  children,
  ...props
}) => (
  <a
    href={href}
    target={target}
    rel={rel}
  className={`px-6 py-5 bg-slate-700 text-xl ml-6 hover:bg-slate-500 text-white font-semibold rounded-sm transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </a>
);