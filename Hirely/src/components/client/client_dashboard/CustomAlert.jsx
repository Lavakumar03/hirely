import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-purple-500/20 rounded-lg p-6 max-w-sm w-full mx-4">
        <p className="text-gray-200 text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;