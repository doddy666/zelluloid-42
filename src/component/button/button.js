import React from 'react';
import './button.css';

const Button = ({ children, href, onClick, className = '' }) => {
  const combinedClass = `zelluloid-button ${className}`;

  return href ? (
    <a
      href={href}
      className={combinedClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <button className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

