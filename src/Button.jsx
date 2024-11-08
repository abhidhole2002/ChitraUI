import React from 'react';
import './index.css'; 

export const Button = ({ children }) => (
  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
    {children} 
  </button>
);
