// eslint-disable-next-line no-unused-vars
import React, { useState,useRef } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg'
import menu_close  from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('about');
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="navbar">
      <h1>Sayed Ahmad</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef}className="nav-menu">
        <img src={ menu_close } onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <a className="anchor-link" href="#home" onClick={() => setMenu('home')}>
            <p>Home</p>
          </a>
          {menu === 'home' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <a className="anchor-link" href="#about-me" onClick={() => setMenu('about')}>
            <p>About Me</p>
          </a>
          {menu === 'about' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <a className="anchor-link" href="#services" onClick={() => setMenu('services')}>
            <p>Services</p>
          </a>
          {menu === 'services' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <a className="anchor-link" href="#contact" onClick={() => setMenu('contact')}>
            <p>Contact</p>
          </a>
          {menu === 'contact' && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <a className="anchor-link" href="#contact" onClick={() => setMenu('contact')}>
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
