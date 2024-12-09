import React, { useEffect, useState } from 'react';
import { addSector, deleteSector, getSectores } from '../services/api';

function AdminSectores() {
  const [sectores, setSectores] = useState([]);
  const [nuevoSector, setNuevoSector] = useState({
    nombre: '',
    horarioInicio: '',
    horarioFin: '',
    coordenadas: '',
  });

  useEffect(() => {
    getSectores().then(setSectores);
  }, []);

  const handleInputChange = (e) => {
    setNuevoSector({ ...nuevoSector, [e.target.name]: e.target.value });
  };

  const handleAddSector = async () => {
    await addSector(nuevoSector);
    setSectores(await getSectores());
    setNuevoSector({ nombre: '', horarioInicio: '', horarioFin: '', coordenadas: '' });
  };

  return (
    <div>
      <h1>Gestión de Sectores</h1>
      <div>
        <input name="nombre" value={nuevoSector.nombre} onChange={handleInputChange} placeholder="Nombre del sector" />
        <input name="horarioInicio" value={nuevoSector.horarioInicio} onChange={handleInputChange} placeholder="Hora Inicio (HH:mm)" />
        <input name="horarioFin" value={nuevoSector.horarioFin} onChange={handleInputChange} placeholder="Hora Fin (HH:mm)" />
        <input name="coordenadas" value={nuevoSector.coordenadas} onChange={handleInputChange} placeholder="Polígono de coordenadas" />
        <button onClick={handleAddSector}>Agregar Sector</button>
      </div>
      <ul>
        {sectores.map((sector) => (
          <li key={sector.id}>
            {sector.nombre} - {sector.horarioInicio} a {sector.horarioFin}
            <button onClick={() => deleteSector(sector.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSectores;
