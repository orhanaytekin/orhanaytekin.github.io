"use client";

import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: string;
  className?: string;
  labelColour?: string;
  inputColour?: string;
}

const FormFieldComponent: React.FC<FormFieldProps> = ({ label, id, type, value, onChange, error, className, labelColour = 'white', inputColour = 'black' }) => {
  const inputClasses = `w-full p-2 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'} ${className || ''}`;
  const labelClasses = `block mb-2 font-bold ${labelColour === 'white' ? 'text-white' : 'text-gray-700'}`;
  const inputStyles = { color: inputColour };

  return (
    <div className="mb-4">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className={inputClasses}
          style={inputStyles}
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={inputClasses}
          style={inputStyles}
        />
      )}
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormFieldComponent;