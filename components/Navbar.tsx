
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Spacer to prevent content jump because nav is fixed */}
      <div className="h-0 md:h-0"></div> 
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4`}>
        <div className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-app border border-white/40 py-2 px-6' : 'bg-transparent py-4 px-0'}`}>
          <div className="flex justify-between items-center h-12"> 
            {/* Logo Container */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
              className="flex items-center h-full mr-8"
            >
                {/* LOGO LOGIC: 
                    If NOT scrolled (on Teal Hero), make logo WHITE (brightness-0 invert).
                    If Scrolled (on White Nav), keep Original Color.
                */}
                <img 
                  src={CONTACT_INFO.logoUrl} 
                  alt="LYHU Logo" 
                  className={`h-full w-auto object-contain transition-all duration-300 ${scrolled ? 'max-h-8' : 'max-h-10 brightness-0 invert'}`} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/120x40?text=LYHU';
                  }}
                />
            </a>

            {/* Desktop Menu - App Pill Style */}
            <div className="hidden lg:flex items-center space-x-2">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  const isChildActive = item.children.some(c => c.id === currentPage);
                  return (
                    <div key={item.id} className="relative group">
                      <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${isChildActive ? 'bg-lyhu-teal text-white shadow-md' : (scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10')}`}>
                        {item.label} <ChevronDown size={12} strokeWidth={3} />
                      </button>
                      
                      {/* Dropdown - iOS Style */}
                      <div className="absolute top-full left-0 mt-2 w-56 invisible opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="bg-white/90 backdrop-blur-xl shadow-floating rounded-2xl overflow-hidden p-1.5 border border-white/50">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleNavClick(child.id)}
                              className={`block w-full text-left px-4 py-3 text-xs font-bold rounded-xl transition-colors ${currentPage === child.id ? 'bg-lyhu-teal/10 text-lyhu-teal' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${currentPage === item.id ? 'bg-lyhu-teal text-white shadow-lg shadow-lyhu-teal/20' : (scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10')}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button - Updated for Teal Background Contrast */}
            <div className="hidden lg:block ml-4">
              <button 
                onClick={() => handleNavClick('contact')} 
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${scrolled ? 'bg-lyhu-dark text-white hover:bg-gray-800' : 'bg-white text-lyhu-teal hover:bg-gray-50 shadow-lg'}`}
              >
                <Phone size={14} fill="currentColor" /> Liên hệ
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - App Drawer Style */}
        <div className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} onClick={() => setIsOpen(false)}>
        </div>
        
        <div className={`fixed top-4 right-4 bottom-4 w-80 bg-white rounded-3xl shadow-2xl z-50 transform transition-transform duration-300 flex flex-col p-6 overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'}`}>
            <div className="flex justify-between items-center mb-8">
               <span className="text-xl font-bold text-lyhu-dark">Menu</span>
               <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <X size={20} className="text-gray-600" />
               </button>
            </div>
            
            <div className="flex flex-col space-y-2 overflow-y-auto flex-grow no-scrollbar">
              {NAV_ITEMS.map((item) => {
                 if (item.children) {
                   return (
                     <div key={item.id} className="bg-gray-50 rounded-2xl p-4 space-y-3">
                        <span className="text-xs font-bold uppercase text-gray-400 tracking-widest">{item.label}</span>
                        {item.children.map(child => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.id)}
                            className={`block w-full text-left font-bold text-sm py-2 ${currentPage === child.id ? 'text-lyhu-teal' : 'text-gray-700'}`}
                          >
                            {child.label}
                          </button>
                        ))}
                     </div>
                   )
                 }
                 return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-4 rounded-2xl font-bold text-sm transition-colors ${currentPage === item.id ? 'bg-lyhu-teal text-white shadow-md' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {item.label}
                  </button>
                 )
              })}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-lyhu-dark text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
                >
                  Liên hệ ngay
              </button>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
