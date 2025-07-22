import React from 'react';
import { IoSearch } from 'react-icons/io5';
import ThemeToggle from './ThemeToggle';
import userAvatar from '../assets/me.png';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  // Mettre à jour la prop `activePage` pour inclure 'search-reports'
  setActivePage: (page: 'dashboard' | 'settings' | 'help' | 'search-reports') => void;
  activePage: 'dashboard' | 'settings' | 'help' | 'search-reports';
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, setActivePage, activePage }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">A</div>
        <nav className="header-nav">
          <a href="#" className={activePage === 'dashboard' ? 'active' : ''} onClick={() => setActivePage('dashboard')}>Home</a>
          <a href="#" className={activePage === 'settings' ? 'active' : ''} onClick={() => setActivePage('settings')}>Settings</a>
          <a href="#" className={activePage === 'help' ? 'active' : ''} onClick={() => setActivePage('help')}>Help</a>
          {/* Le nouveau lien "Search Reports" */}
          <a href="#" className={activePage === 'search-reports' ? 'active' : ''} onClick={() => setActivePage('search-reports')}>Search Reports</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <IoSearch />
          <input type="text" placeholder="Search..." />
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <div className="user-profile">
          <div className="user-profile-text">
            <span>Adriano Kamgang</span>
            <span>Super Admin</span>
          </div>
          <div className="user-avatar">
            <img src={userAvatar} alt="User Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;