"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const FormFieldComponent = ({ label, id, type, value, onChange, error }: { label: string, id: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, error: string }) => {
  return (
    <DraggableResizableComponent>
      <div>
        <label htmlFor={id} className="block text-sm font-medium">{label}</label>
        {type === 'textarea' ? (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
          ></textarea>
        ) : (
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-800 text-white"
          />
        )}
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </DraggableResizableComponent>
  );
};

export default FormFieldComponent;