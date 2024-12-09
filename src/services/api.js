const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export async function getClientes() {
  const response = await fetch(`${API_URL}/clientes`);
  return response.json();
}

export async function addCliente(cliente) {
  await fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente),
  });
}

export async function deleteCliente(cedula) {
  await fetch(`${API_URL}/clientes/${cedula}`, { method: 'DELETE' });
}

export async function getSectores() {
  const response = await fetch(`${API_URL}/sectores`);
  return response.json();
}

export async function addSector(sector) {
  await fetch(`${API_URL}/sectores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sector),
  });
}

export async function deleteSector(id) {
  await fetch(`${API_URL}/sectores/${id}`, { method: 'DELETE' });
}

export async function getHorarios() {
  const response = await fetch(`${API_URL}/horarios`);
  return response.json();
}

