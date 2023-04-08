import React from 'react'
import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
