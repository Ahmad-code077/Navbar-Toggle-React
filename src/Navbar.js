import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (toggle) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height = '0px';
    }
  }, [toggle]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={() => setToggle(!toggle)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linkContainerRef}>
          <ul className='links' ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
