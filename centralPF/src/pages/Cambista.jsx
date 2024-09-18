import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cambista() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cambistas, setCambistas] = useState([
    // Exemplo de dados dos cambistas
    { id: 1, login: 'cambista1', cotacao: 10, saldo: 100, status: 'Ativo' },
    { id: 2, login: 'cambista2', cotacao: 20, saldo: 200, status: 'Inativo' },
    // Adicione mais dados conforme necessário
  ]);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreate = () => {
    navigate('/cambista/criar');
  };

  const handleEdit = (id) => {
    // Lógica para editar o cambista
    console.log('Editar cambista com id:', id);
  };

  const handleDelete = (id) => {
    // Lógica para deletar o cambista
    console.log('Deletar cambista com id:', id);
  };

  const filteredCambistas = cambistas.filter((cambista) =>
    cambista.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Cambista</h2>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginRight: '1rem' }}
        />
        <button onClick={handleCreate}>Criar Novo Cambista</button>
      </div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Login</th>
            <th>Cotação/Comissões</th>
            <th>Saldo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredCambistas.map((cambista) => (
            <tr key={cambista.id}>
              <td>{cambista.login}</td>
              <td>{cambista.cotacao}</td>
              <td>{cambista.saldo}</td>
              <td>{cambista.status}</td>
              <td>
                {/* Div para separar os botões com espaçamento */}
                <div style={{ display: 'flex', gap: '7rem' }}>
                  <button onClick={() => handleEdit(cambista.id)}>Editar</button>
                  <button onClick={() => handleDelete(cambista.id)}>Apagar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cambista;
