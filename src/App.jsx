import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Header1 from './components/Header1.jsx';
import Hero from './components/Hero.jsx';
import T1 from "./components/T1.jsx";
import T2 from "./components/T2.jsx";
import T3 from "./components/T3.jsx";
import OurServices from "./components/OurServices.jsx";
import ChooseUs from "./components/ChooseUs.jsx";
import ClientStats from "./components/ClientStats.jsx";
import Testimonial from "./components/Testimonial.jsx";
import FAQ from './components/FAQ.jsx';
import StartNow from "./components/StartNow.jsx";
import Footer from "./components/Footer.jsx";
import ConsultationForm from "./components/ConsultationForm.jsx";
import TeamSlider from "./components/TeamSlider.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import LatestBlog from "./components/LatestBlog.jsx";
import Footer2 from "./components/Footer2.jsx";
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Projects from './components/Projects.jsx';
import ScrollToTop from './components/ScrollToTop'
// Main layout component that includes common elements
const MainLayout = ({ children }) => (
  <>
    <Header1 />
    {children}
    <Footer />
  </>
);

// Home page component combining all the main sections
const HomePage = () => (
  <>
    <Element name="hero">
      <Hero />
    </Element>
    <Element name="t1">
      <T1 />
    </Element>
    <T3 />
    <Element name="ourservices">
      <OurServices />
    </Element>
    <ChooseUs />
    <HowWeWork />
    <Element name="consultationform">
      <ConsultationForm />
    </Element>
    <Element name="faq">
      <FAQ />
    </Element>
    <StartNow />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main route with layout wrapper */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        
        {/* Individual page routes */}
        <Route path="/privacy-policy" element={
          <MainLayout>
            <PrivacyPolicy />
          </MainLayout>
        } />
        
        <Route path="/projects" element={
          <MainLayout>
            <Projects />
          </MainLayout>
        } />
        
        <Route path="/services" element={
          <MainLayout>
            <Element name="ourservices">
              <OurServices />
            </Element>
          </MainLayout>
        } />
        
        <Route path="/about" element={
          <MainLayout>
            <T1 />
            <ChooseUs />
            <TeamSlider />
          </MainLayout>
        } />
        
        <Route path="/contact" element={
          <MainLayout>
            <ConsultationForm />
          </MainLayout>
        } />
        
        <Route path="/blog" element={
          <MainLayout>
            <LatestBlog />
          </MainLayout>
        } />
        
        <Route path="/faq" element={
          <MainLayout>
            <FAQ />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
