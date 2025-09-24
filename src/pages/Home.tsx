import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import DeliveryAreas from '../components/DeliveryAreas';
import Certifications from '../components/Certifications';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Certifications />
      <DeliveryAreas />
      <TestimonialSlider />
    </>
  );
};

export default Home;
