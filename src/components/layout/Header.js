import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
      <header style={headerStyle}>
          <h1>Sunshines Todo List</h1>
          <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> | <Link style={linkStyle} to="/Linksusefull">Links</Link><br/>
          <a style={abtnStyle} href="https://sunshineremovals.com.au">Sunshine Website</a>
      </header>
  )
}

const headerStyle = {
  position: 'relative',
  background: '#fd5f00',
  color: '#fff',
  textAlign: 'center',
  padding: '30px 10px 50px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
}

const abtnStyle = {
  position: 'relative',
  color: '#fff',
  textDecoration: 'none',
  border: '1px solid #fff',
  borderRadius: '5px',
  padding: '5px 10px',
  top: '20px',
}

export default Header; 