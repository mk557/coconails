// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PedicurePricePage from './components/PedicurePricePage';
import ContactPage from './components/ContactPage';
import LocationModal from './components/LocationModal';
import ManicurePricePage from './components/ManicurePricePage';
import WaxingPricePage from './components/WaxingPricePage';
import ReflexologyPricePage from './components/ReflexologyPricePage';

import './styles/App.css';

const App = () => {
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);

  const handleOpenLocationModal = () => {
    setLocationModalOpen(true);
  };

  const handleCloseLocationModal = () => {
    setLocationModalOpen(false);
  };

  return (
    <Router>
      <Navbar onOpenLocationModal={handleOpenLocationModal} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manicure" element={<ManicurePricePage />} />
        <Route path="/pedicure" element={<PedicurePricePage />} />
        <Route path="/waxing" element={<WaxingPricePage />} />
        <Route path="/reflexology" element={<ReflexologyPricePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <LocationModal open={isLocationModalOpen} onClose={handleCloseLocationModal} />
    </Router>
  );
};

export default App;
