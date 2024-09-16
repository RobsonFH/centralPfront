import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Gerente() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gerentes, setGerentes] = useState([
    // Exemplo de dados dos gerentes
    { id: 1, login: 'gerente1', cotacao: 10, saldo: 100, status: 'Ativo' },
    { id: 2, login: 'gerente2', cotacao: 20, saldo: 200, status: 'Inativo' },
    // Adicione mais dados conforme necessário
  ]);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreate = () => {
    navigate('/gerente/criar');
  };

  const handleEdit = (id) => {
    console.log('Editar gerente com id:', id);
  };

  const handleDelete = (id) => {
    console.log('Deletar gerente com id:', id);
  };

  const filteredGerentes = gerentes.filter((gerente) =>
    gerente.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Gerente</h2>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginRight: '1rem', padding: '0.5rem', width: '100%', maxWidth: '300px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <button onClick={handleCreate}>Criar Novo Gerente</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Login</th>
              <th>Bruto</th>
              <th>Lucro</th>
              <th>Sócio</th>
              <th>C / S</th>
              <th>Status</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {filteredGerentes.map((gerente) => (
              <tr key={gerente.id}>
                <td>{gerente.login}</td>
                <td>{gerente.cotacao}</td>
                <td>{gerente.saldo}</td>
                <td>{gerente.status}</td>
                <td>{gerente.status}</td>
                <td>{gerente.status}</td>
                <td>
                  <button onClick={() => handleEdit(gerente.id)}>Editar</button>
                  <button onClick={() => handleDelete(gerente.id)}>Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gerente;
