import React, { useState } from 'react';
import './Sidebar.css'; // Ensure to include your CSS styles

import { Link } from 'react-router-dom';
import Clock from '../C2-DescribingUI/Clock';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = (index) => {
    
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      
      <div className="sidebar-header">
        <h3 className="brand">
          <i className="fas fa-anchor"></i>
          <span>AppDeft : React</span>
        </h3>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'} toggle-icon`}></i>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            <span className="nav-icon"><i className="fas fa-circle"></i></span>
            <span>Introduction</span>
          </Link>
        </li>
        <li className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
          <Link to="/components" className="nav-item dropdown-toggle" onClick={() => toggleDropdown(1)}>
            <div>
              <span className="nav-icon"><i className="fas fa-cogs"></i></span>
              <span>Describing the UI</span>
            </div>
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/components" className="dropdown-item">Components</Link></li>
            <li><Link to="/jsx" className="dropdown-item">JSX</Link></li>
            <li><Link to="/states" className="dropdown-item">States</Link></li>
            <li><Link to="/props" className="dropdown-item">Props</Link></li>
            <li><Link to="/forms" className="dropdown-item">Forms</Link></li>
            <li><Link to="/loops" className="dropdown-item">Loops</Link></li>
          </ul>
        </li>
        <li className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
          <Link to="/" className="nav-item dropdown-toggle" onClick={() => toggleDropdown(2)}>
            <div>
              <span className="nav-icon"><i className="fas fa-cogs"></i></span>
              <span>Describing the UI</span>
            </div>
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/" className="dropdown-item">General</Link></li>
            <li><Link to="/" className="dropdown-item">Privacy</Link></li>
            <li><Link to="/" className="dropdown-item">Notifications</Link></li>
          </ul>
        </li>
      </ul>
      <div>
      <Clock />
      </div>
    </div>
  );
};

export default Sidebar;