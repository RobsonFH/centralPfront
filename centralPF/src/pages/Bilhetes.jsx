import React, { useState } from 'react';

function Bilhetes() {
  const [filtros, setFiltros] = useState({
    gerente: '',
    cambista: '',
    situacao: '',
    data: '',
    numeroBilhete: ''
  });

  const [bilhetes, setBilhetes] = useState([
    // Exemplo de dados dos bilhetes
    {
      id: 1,
      numero: '123456',
      dataHora: '2024-08-08 14:30',
      operador: 'Operador 1',
      valor: 100,
      premio: 500,
      extracao: 'Extração 1',
    },
    {
      id: 2,
      numero: '654321',
      dataHora: '2024-08-07 12:00',
      operador: 'Operador 2',
      valor: 150,
      premio: 600,
      extracao: 'Extração 2',
    },
    // Adicione mais dados conforme necessário
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleSearch = () => {
    console.log('Filtros aplicados:', filtros);
    // Lógica para filtrar e buscar os bilhetes
  };

  const handleCancel = (id) => {
    console.log('Cancelar bilhete com id:', id);
    // Lógica para cancelar o bilhete
  };

  return (
    <div>
      <h2>Filtrar Bilhetes</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          name="gerente"
          placeholder="Filtrar Gerente"
          value={filtros.gerente}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '150px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <input
          type="text"
          name="cambista"
          placeholder="Filtrar Cambista"
          value={filtros.cambista}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '150px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <select
          name="situacao"
          value={filtros.situacao}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '150px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        >
          <option value="">Situação</option>
          <option value="vendedor">Vendedor</option>
          <option value="outro">Outro</option>
        </select>
        <input
          type="date"
          name="data"
          value={filtros.data}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '150px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <input
          type="text"
          name="numeroBilhete"
          placeholder="Número do Bilhete"
          value={filtros.numeroBilhete}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '200px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem' }}>Buscar</button>
      </div>

      <h2>Lista de Bilhetes</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Número do Bilhete</th>
              <th>Data/Hora</th>
              <th>Operador</th>
              <th>Valor do Bilhete</th>
              <th>Prêmio</th>
              <th>Extração</th>
              <th>Cancelar</th>
            </tr>
          </thead>
          <tbody>
            {bilhetes.map((bilhete) => (
              <tr key={bilhete.id}>
                <td>{bilhete.numero}</td>
                <td>{bilhete.dataHora}</td>
                <td>{bilhete.operador}</td>
                <td>{bilhete.valor}</td>
                <td>{bilhete.premio}</td>
                <td>{bilhete.extracao}</td>
                <td>
                  <button onClick={() => handleCancel(bilhete.id)}>Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bilhetes;
