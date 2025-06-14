import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="app-title">
          <span className="gradient-text">FinSUSU</span>
        </h1>
      </div>
      <div className="header-right">
        <button className="settings-button">
          <i className="fas fa-cog"></i>
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header; 