import React from 'react';

const Header: React.FC = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.98)';
          header.style.boxShadow = '0 2px 30px rgba(79, 142, 247, 0.15)';
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
          header.style.boxShadow = '0 2px 20px rgba(79, 142, 247, 0.1)';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img 
                src="https://i.imgur.com/XGI4jaS.png" 
                alt="InstantlyEngage" 
                className="h-8 sm:h-12 w-auto"
              />
            </a>
            
            {/* Right side - CTA only */}
            <div className="flex items-center">
              {/* Book a Call Button */}
              <a 
                href="/booking" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book A Call
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-10 sm:h-14"></div>
    </>
  );
};

export default Header;