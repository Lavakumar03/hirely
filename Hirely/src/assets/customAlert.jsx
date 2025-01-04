import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <p className="text-lg mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
