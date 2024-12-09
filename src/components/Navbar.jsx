import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Gestión de Interrupciones</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/admin/clientes">Clientes</Link></li>
        <li><Link to="/admin/sectores">Sectores</Link></li>
        <li><Link to="/cliente/horarios">Horarios</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  title: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
};

export default Navbar;
