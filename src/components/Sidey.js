import React from 'react';
import { CiHome, CiFolderOn, CiCamera, CiVault, CiReceipt } from 'react-icons/ci';
import './Sidey.css';
import { NavLink } from 'react-router-dom';

const Sidey = ({ isCollapsed, children }) => {
  const menuItem = [
    {
      path: '/home',
      name: 'Dashboard',
      icon: <CiHome />,
    },
    {
      path: '/post',
      name: 'Posts',
      icon: <CiFolderOn />,
    },
    {
      path: '/videos',
      name: 'Videos',
      icon: <CiFolderOn />,
    },
    {
      path: '/rssdetails',
      name: 'RSS Details',
      icon: <CiCamera />,
    },
    {
      path: '/visualstories',
      name: 'Visual Stories',
      icon: <CiVault />,
    },
    {
      path: '/trendingnews',
      name: 'Trending News',
      icon: <CiReceipt />,
    },
    {
      path: '/roles',
      name: 'Roles',
      icon: <CiReceipt />,
    },
    {
      path: '/createuser',
      name: 'Create Users',
      icon: <CiReceipt />,
    },
  ];

  return (
    <div className={`sidey ${isCollapsed ? 'collapsed' : ''}`}>
      <ul className="nav flex-column">
        {menuItem.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink
              to={item.path}
              className="nav-link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: !isCollapsed ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <main>{children}</main>
    </div>
  );
};

export default Sidey;
