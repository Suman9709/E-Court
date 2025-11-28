import React from 'react'

const ConsultancyInput = ({ label, type, placeholder, value, onChange }) => {
    
    return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-medium text-white">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border px-3 py-2 rounded outline-none focus:border-black transition"
      />
    </div>
  );
};

export default ConsultancyInput