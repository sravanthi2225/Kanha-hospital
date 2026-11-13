import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'emergency', 'white'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs sm:text-sm font-semibold rounded-full',
    md: 'px-6 py-3 text-sm sm:text-base font-semibold rounded-full',
    lg: 'px-8 py-3.5 text-base sm:text-lg font-bold rounded-full',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:brightness-110 border border-white/20',
    secondary:
      'bg-[#EAF3FF] text-[#1B2A8F] hover:bg-blue-100/80 border border-blue-200/80 shadow-sm',
    outline:
      'bg-transparent text-[#1B2A8F] border-2 border-[#1B2A8F] hover:bg-[#1B2A8F] hover:text-white',
    white:
      'bg-white text-[#1B2A8F] hover:bg-[#EAF3FF] shadow-lg shadow-black/10 hover:shadow-xl',
    emergency:
      'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:brightness-110 border border-white/20',
  };

  const content = (
    <span className="flex items-center justify-center space-x-2">
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`group inline-flex items-center justify-center transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`group inline-flex items-center justify-center transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
    >
      {content}
    </motion.button>
  );
}

