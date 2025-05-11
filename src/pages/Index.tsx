
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Message from '@/components/Message';
import Countdown from '@/components/Countdown';
import BirthdayCard from '@/components/BirthdayCard';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Message />
      <Countdown />
      <BirthdayCard />
      <Footer />
    </div>
  );
};

export default Index;
