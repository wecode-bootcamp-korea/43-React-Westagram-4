import React from 'react';
import './Footer.scss';
import { FOOTER_INFO_LIST } from './data/FooterData';

const Footer = props => {
  return (
    <footer className="gray">
      <ul>
        {FOOTER_INFO_LIST.map(info => (
          <li key={info.id}>
            <a href={info.link} target="_blank" rel="noreferrer">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
      <small>&copy; 2019 INSTAGRAM</small>
    </footer>
  );
};

export default Footer;
