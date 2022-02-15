import React from 'react'



export default function Navbar({currentPage, handlePageChange}) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">Derrick's Portfolio</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className={currentPage === 'Hero' ? 'nav-link active' : 'nav-link'} href="#Hero" onClick={() => handlePageChange('Hero')}>Home</a>
              <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#About" onClick={() => handlePageChange('About')}>About</a>
              <a className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} href="#Projects" onClick={() => handlePageChange('Projects')}>Projects</a>
              <a className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>
  );
}