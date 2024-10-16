import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // To manage collapse state

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2>Popular Recipes</h2>
          {/* Button is always visible to toggle sidebar */}
          <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
            {isCollapsed ? 'Show' : 'Hide'}
          </button>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <ul>
          <li><Link to="/video/1">Spaghetti Carbonara</Link></li>
          <li><Link to="/video/2">Chicken Alfredo</Link></li>
          <li><Link to="/video/3">Beef Stroganoff</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
