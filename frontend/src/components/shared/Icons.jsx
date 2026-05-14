import React from 'react';

/**
 * Icons Library
 * Centralized React components for custom SVGs and brand icons.
 * Usage: import { CheckIcon } from '../shared/Icons';
 */

export const CheckIcon = ({ className = "h-5 w-5", ...props }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

export const LogoIcon = ({ className = "h-8 w-8", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="8" fill={color} fillOpacity="0.1" />
    <path 
      d="M12 28V12L20 20L28 12V28" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Add more custom brand icons here as needed
