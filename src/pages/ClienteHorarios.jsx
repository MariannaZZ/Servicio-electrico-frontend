import React, { useEffect, useState } from 'react';
import { getHorarios } from '../services/api';

function ClienteHorarios() {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    getHorarios().then(setHorarios);
  }, []);

  return (
    <div>
      <h1>Horario de Interrupciones</h1>
      <ul>
        {horarios.map((horario) => (
          <li key={horario.id}>
            Sector: {horario.sector} | Inicio: {horario.horaInicio} | Fin: {horario.horaFin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClienteHorarios;
