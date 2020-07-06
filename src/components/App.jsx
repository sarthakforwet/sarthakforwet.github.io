import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Writings from './Writings/Writings';
import OpenSource from './OpenSource/OpenSource';
import Certifications from './Certifications/Certifications'

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, writingsData, openSourceData, certificationsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [writings, setWritings] = useState([]);
  const [opensource,setOpenSource] = useState([]);
  const [certifications, setCertificates] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setWritings([...writingsData]);
    setOpenSource([...openSourceData]);
    setCertificates({ ...certificationsData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, writings, opensource, certifications,  contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Writings />
      <OpenSource />
      <Certifications />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
