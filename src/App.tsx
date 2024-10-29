import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import TrackingPage from './pages/TrackingPage';
import RoutesPage from './pages/RoutesPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track/:busNumber" element={<TrackingPage />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;