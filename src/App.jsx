import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-green antialiased flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>

      <footer className="w-full bg-brand-green text-white py-12 text-center mt-auto">
        <p className="opacity-80">Footer / Contact Page coming soon...</p>
      </footer>
    </div>
  );
}

export default App;
