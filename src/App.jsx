import React from 'react';
import './styles.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Atmosphere from './components/Atmosphere';
import Trust from './components/Trust';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Hero />
      <Services />
      <Atmosphere />
      <Trust />
      <Contacts />
      <Footer />
    </main>
  );
}
