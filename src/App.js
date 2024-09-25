import React from 'react';
import Header from './components/Header';
import BackToTop from './components/BackToTop'; 
import HeroSection from './components/HeroSection';
import Profiles from './components/ProfilesSection/Profiles';
import Services from './components/ServicesSection/Services';
import ClientsContact from './components/ClientsContactSection/ClientsContact';
import Footer from './components/Footer';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>InnovAr - LATAM</title>
        <meta name="description" content="Transformamos ideas en negocios - InnovAr LATAM" />
        <meta property="og:title" content="InnovAr - LATAM" />
        <meta property="og:description" content="Transformamos ideas en negocios - InnovAr LATAM" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://innovar-latam.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <BackToTop />
      <HeroSection />
      <Profiles />
      <Services />
      <ClientsContact />
      <Footer />
    </div>
  );
}

export default App;

//export NODE_OPTIONS=--openssl-legacy-provider
//npm run build
