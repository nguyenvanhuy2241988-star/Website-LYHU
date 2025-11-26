
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AdnLogic from './components/AdnLogic';
import CoreValues from './components/CoreValues';
import BusinessAreas from './components/BusinessAreas';
import Products from './components/Products';
import News from './components/News';
import Recruitment from './components/Recruitment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PartnerCTA from './components/PartnerCTA';
import PromoModal from './components/PromoModal';
import Partners from './components/Partners';
import DownloadApp from './components/DownloadApp';
import FloatingContact from './components/FloatingContact';
import Chatbot from './components/Chatbot';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Initialize Scroll Animations (Intersection Observer) on route change
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Delay slightly to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentPage]);

  const handleAdminLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('admin-dashboard');
  };

  const handleAdminLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderContent = () => {
    // Handle Product Sub-routes
    if (currentPage.startsWith('products-')) {
       const brandId = currentPage.split('-')[1]; // 'all', 'BOYO', 'UHi', etc.
       return <Products initialCategory={brandId} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <BusinessAreas onNavigate={setCurrentPage} />
            <Partners />
            <News />
          </>
        );
      case 'about':
        return <About />;
      case 'culture':
        return (
          <>
            <AdnLogic />
            <CoreValues />
          </>
        );
      case 'business':
        // Fallback or specific route for Business Model explanation if needed
        return <BusinessAreas onNavigate={setCurrentPage} />;
      case 'products': // Fallback if someone hits just 'products' ID manually
        return <Products initialCategory="all" />;
      case 'download-app':
        return <DownloadApp />;
      case 'news':
        return <News />;
      case 'careers':
        return <Recruitment />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return isLoggedIn ? (
          <AdminDashboard onLogout={handleAdminLogout} />
        ) : (
          <AdminLogin onLogin={handleAdminLogin} />
        );
      case 'admin-dashboard':
        return isLoggedIn ? (
          <AdminDashboard onLogout={handleAdminLogout} />
        ) : (
          <AdminLogin onLogin={handleAdminLogin} />
        );
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  // Determine if we are in Admin Mode to hide Standard Layout elements
  const isAdminPage = currentPage === 'admin' || currentPage === 'admin-dashboard';

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col selection:bg-lyhu-green selection:text-white relative">
      {/* Hide Public Navbar on Admin Pages */}
      {!isAdminPage && (
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      
      <main className={`flex-grow ${!isAdminPage ? 'pt-[0px]' : ''}`}>
        {renderContent()}
        
        {/* Hide Standard CTA/Footer on Admin Pages */}
        {!isAdminPage && currentPage !== 'contact' && (
           <PartnerCTA onNavigate={setCurrentPage} />
        )}
      </main>
      
      {!isAdminPage && (
        <Footer onNavigate={setCurrentPage} />
      )}
      
      {/* --- GLOBAL FLOATING WIDGETS (Hide on Admin) --- */}
      {!isAdminPage && (
        <>
          <FloatingContact />
          <Chatbot />
          {/* Promotional Popup on Site Entry */}
          <PromoModal onNavigate={setCurrentPage} />
        </>
      )}
    </div>
  );
}

export default App;
