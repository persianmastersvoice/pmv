import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px',fontFamily: 'Drugs, sans-serif' }}>
      <Link to="/">
        <img src="/logo.png" alt="Logo" style={{ height: 'auto', width: '100%', maxWidth: '200px' }} />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center' }}>
          <nav style={{ display: 'none', '@media (min-width: 2000px)': { display: 'flex' }, opacity: 0.2 }}>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/persian-music">Persian Music</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </nav>
          <button onClick={toggleMenu} style={{ 
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: '0',
}}>
  {isOpen ? <FaTimes size={24} style={{color: '#000', marginBottom: '4px'}} /> : 
  <div>
    <div style={{width: '24px', height: '4px', backgroundColor: '#827846', marginBottom: '4px'}}></div>
    <div style={{width: '24px', height: '4px', backgroundColor: '#827846', marginBottom: '4px'}}></div>
    <div style={{width: '24px', height: '4px', backgroundColor: '#827846'}}></div>
  </div>}
</button>



          {isOpen && (
            <nav className="menu" style={{ position: 'absolute', top: '100px', left: 0, right: 0 }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px', marginLeft: '80px' }}>
        
            <li style={{ marginLeft: '0px' }}>
              <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT</Link>
            </li>
            <li style={{ marginLeft: '0px' }}>
              <Link to="/persian-music" style={{ color: '#fff', textDecoration: 'none' }}>PERSIAN MUSIC</Link>
            </li>
            <li style={{ marginLeft: '0px' }}>
              <Link to="/search" style={{ color: '#fff', textDecoration: 'none' }}>SEARCH</Link>
            </li>
            <li style={{ marginLeft: '0px' }}>
              <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>CONTACT</Link>
            </li>
            </ul>
            </nav>
          )}
      </div>
    </header>
  );
};

export default Header;
