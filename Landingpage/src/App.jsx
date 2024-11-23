import React from 'react';
import './App.css';
import Cus_Navbar from './components/Cus_Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import BestOffersSection from './components/BestOffersSection.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
const handleSubmit = (event) => {
  event.preventDefault();
  const email = event.target.elements.emailAddressBelow.value;
  alert(`Form submitted with email: ${email}`);
};
const links = [
  { href: "#!", text: "About" },
  { href: "#!", text: "Contact" },
  { href: "#!", text: "Terms of Use" },
  { href: "#!", text: "Privacy Policy" },
];

const socialIcons = [
  { href: "#!", name: "facebook" },
  { href: "#!", name: "twitter" },
  { href: "#!", name: "instagram" },
];
function App() {
  return (
    <>
      <Cus_Navbar />
      <Hero />
      <FeaturesSection />
      <ShowcaseSection />
      <BestOffersSection/>
      <CallToAction
        title="Enquiry Here"
        onSubmit={handleSubmit}
      />
      <Footer 
        links={links}
        socialIcons={socialIcons}
        year={2023}
        websiteName="Your Website"
      />
    </>
  );
}

export default App;
