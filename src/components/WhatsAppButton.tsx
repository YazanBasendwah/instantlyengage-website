import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative group">
        {/* Tooltip - positioned with enough space */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          {/* Arrow pointing down */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800"></div>
        </div>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/966545891557" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <img 
            src="https://i.imgur.com/JoHiXr6.png" 
            alt="WhatsApp" 
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;