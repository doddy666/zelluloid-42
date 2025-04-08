import React from 'react';
import './textfield.css';

const Textfield = ({ label, value, onChange }) => {
  return (
    <div className="textfield">
      <label>{label}</label>
    </div>
  );
};

export default Textfield;
