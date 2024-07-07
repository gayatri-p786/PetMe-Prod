import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DigitalTemplate from '../components/DigitalTemplate';

function DigitalContract() {
    const pages = [
        "Page 1: Terms and conditions...",
        "Page 2: Privacy policy...",
        "Page 3: Agreement details...",
        // Add more pages as needed
      ];
  return (
    <>
      <Header />
      <main className="flex pt-[6rem] flex-col w-full justify-center">
        <DigitalTemplate pages={pages} />
      </main>
      <Footer />
    </>
  );
}

export default DigitalContract;
