import React, { useState } from 'react';

function Saldos() {
  const [cambistas, setCambistas] = useState([
    // Exemplo de dados dos cambistas
    { id: 1, login: 'cambista1', saldo: 100 },
    { id: 2, login: 'cambista2', saldo: 200 },
    // Adicione mais dados conforme necessário
  ]);

  const handleSaldoChange = (id, newSaldo) => {
    const updatedCambistas = cambistas.map((cambista) =>
      cambista.id === id ? { ...cambista, saldo: newSaldo } : cambista
    );
    setCambistas(updatedCambistas);
  };

  const handleSave = (id) => {
    const cambista = cambistas.find((c) => c.id === id);
    console.log(`Saldo do cambista ${cambista.login} atualizado para ${cambista.saldo}`);
    // Aqui você pode adicionar a lógica para salvar o saldo atualizado no backend
  };

  return (
    <div>
      <h2>Gerenciamento de Saldos</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Login</th>
              <th>Saldo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cambistas.map((cambista) => (
              <tr key={cambista.id}>
                <td>{cambista.login}</td>
                <td>
                  <input
                    type="number"
                    value={cambista.saldo}
                    onChange={(e) => handleSaldoChange(cambista.id, parseFloat(e.target.value))}
                    style={{ padding: '0.5rem', width: '100%', maxWidth: '150px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
                  />
                </td>
                <td>
                  <button onClick={() => handleSave(cambista.id)}>Salvar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saldos;
