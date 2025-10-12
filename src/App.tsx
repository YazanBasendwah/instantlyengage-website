import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingPage from './pages/BookingPage';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import './index.css';

function App() {
  useScrollAnimations();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <HeroSection />
            <TestimonialsSection />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;