'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<'button' | 'a'> {
  variant?: 'primary' | 'secondary' | 'telegram' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  shine?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  fullWidth = false,
  icon,
  shine = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 focus:ring-primary-500',
    secondary: 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 focus:ring-accent-500',
    telegram: 'bg-telegram-gradient hover:from-[#0099dd] hover:to-[#0077bb] text-white shadow-lg shadow-[#0088cc]/25 hover:shadow-[#0088cc]/40 focus:ring-[#0088cc]',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 focus:ring-primary-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-gray-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const shineStyles = shine ? 'btn-shine' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${shineStyles} ${widthStyles} ${className}`.trim();

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClassName}
        {...(props as HTMLMotionProps<'a'>)}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClassName}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
}
