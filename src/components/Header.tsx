import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header: React.FC = () => {
  return (
    <header style={{
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '20px 0',
    }}>
      <div style={{ marginBottom: '10px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>ALEXANDER & RACHEL</h1>
      </div>
      <nav style={{ width: '100%' }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '1px solid #ddd',
            margin: 0,
          }}
        >
          <Menu.Item key="home" style={{ fontSize: '18px', fontWeight: '500', color: '#ccc' }}>
            <Link to="/">HOME</Link> {/* Link updated for routing */}
          </Menu.Item>
          <Menu.Item key="details" style={{ fontSize: '18px', fontWeight: '500', color: '#ccc' }}>
            <Link to="/about">DETAILS</Link>
          </Menu.Item>
          <Menu.Item key="registry" style={{ fontSize: '18px', fontWeight: '500', color: '#ccc' }}>
            <Link to="/registry">REGISTRY</Link>
          </Menu.Item>
          <Menu.Item key="rsvp" style={{ fontSize: '18px', fontWeight: '500', color: '#ccc' }}>
            <Link to="/rsvp">RSVP</Link>
          </Menu.Item>
          <Menu.Item key="donations" style={{ fontSize: '18px', fontWeight: '500', color: '#ccc' }}>
            <Link to="/donation">DONATIONS</Link>
          </Menu.Item>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
