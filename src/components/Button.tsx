import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary hover:bg-primary-600 text-white shadow-lg hover:shadow-primary/20 hover:shadow-xl",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  
  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;