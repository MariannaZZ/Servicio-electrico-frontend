import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
};

export default NotFound;
