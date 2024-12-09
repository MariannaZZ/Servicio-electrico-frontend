import React, { useEffect, useState } from 'react';
import { addCliente, deleteCliente, getClientes } from '../services/api';

function AdminClientes() {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState({
    cedula: '',
    nombres: '',
    apellidos: '',
    email: '',
    coordenadas: '',
  });

  useEffect(() => {
    getClientes().then(setClientes);
  }, []);

  const handleInputChange = (e) => {
    setNuevoCliente({ ...nuevoCliente, [e.target.name]: e.target.value });
  };

  const handleAddCliente = async () => {
    await addCliente(nuevoCliente);
    setClientes(await getClientes());
    setNuevoCliente({ cedula: '', nombres: '', apellidos: '', email: '', coordenadas: '' });
  };

  return (
    <div>
      <h1>Gestión de Clientes</h1>
      <div>
        <input name="cedula" value={nuevoCliente.cedula} onChange={handleInputChange} placeholder="Cédula" />
        <input name="nombres" value={nuevoCliente.nombres} onChange={handleInputChange} placeholder="Nombres" />
        <input name="apellidos" value={nuevoCliente.apellidos} onChange={handleInputChange} placeholder="Apellidos" />
        <input name="email" value={nuevoCliente.email} onChange={handleInputChange} placeholder="Correo" />
        <input name="coordenadas" value={nuevoCliente.coordenadas} onChange={handleInputChange} placeholder="Coordenadas" />
        <button onClick={handleAddCliente}>Agregar Cliente</button>
      </div>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.cedula}>
            {cliente.nombres} {cliente.apellidos} - {cliente.email}
            <button onClick={() => deleteCliente(cliente.cedula)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminClientes;
