import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <ul>
        <li
          onClick={() => {
            navigate('/login-teahoon');
          }}
        >
          Taehoon
        </li>
        <li
          onClick={() => {
            navigate('/login-somyi');
          }}
        >
          Somyi
        </li>
        <li
          onClick={() => {
            navigate('/login-yoojeong');
          }}
        >
          Yoojeong
        </li>
        <li
          onClick={() => {
            navigate('/login-kitae');
          }}
        >
          Kitae
        </li>
      </ul>
    </div>
  );
};

export default Nav;
