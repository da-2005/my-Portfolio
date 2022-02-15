import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './pages/Hero';
import About from './pages/About';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Hero');
  
    const renderPage = () => {
      if (currentPage === 'Hero') {
        return <Hero />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      // if (currentPage === 'Projects') {
      //   return <Projects />;
      // }
      // return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
