import React, { useState } from 'react';

function PrestarContas() {
  const [filtros, setFiltros] = useState({
    gerente: '',
    cambista: ''
  });

  const [cambistas, setCambistas] = useState([
    // Exemplo de dados dos cambistas
    {
      id: 1,
      nome: 'Cambista 1',
      entrada: 1000,
      emAberto: 200,
      saidas: 300,
      comissao: 50,
      lancamentos: 20,
      total: 1430
    },
    {
      id: 2,
      nome: 'Cambista 2',
      entrada: 1500,
      emAberto: 300,
      saidas: 400,
      comissao: 70,
      lancamentos: 30,
      total: 1800
    },
    // Adicione mais dados conforme necessário
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handlePrestarContaTodos = () => {
    console.log('Prestando contas com todos:', filtros);
    // Lógica para prestar contas com todos os cambistas
  };

  const handlePrestarConta = (id) => {
    console.log('Prestando conta com cambista de id:', id);
    // Lógica para prestar conta com um cambista específico
  };

  return (
    <div>
      <h2>Prestar Contas</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          name="gerente"
          placeholder="Filtrar Gerente"
          value={filtros.gerente}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '200px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <input
          type="text"
          name="cambista"
          placeholder="Filtrar Cambista"
          value={filtros.cambista}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '200px', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        
      </div>

      <h3>Lista de Cambistas</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Cambista</th>
              <th>Entrada</th>
              <th>Em Aberto</th>
              <th>Saídas</th>
              <th>Comissão</th>
              <th>Lançamentos</th>
              <th>Total</th>
              <th>Prestação</th>
            </tr>
          </thead>
          <tbody>
            {cambistas.map((cambista) => (
              <tr key={cambista.id}>
                <td>{cambista.nome}</td>
                <td>{cambista.entrada}</td>
                <td>{cambista.emAberto}</td>
                <td>{cambista.saidas}</td>
                <td>{cambista.comissao}</td>
                <td>{cambista.lancamentos}</td>
                <td>{cambista.total}</td>
                <td>
                <button onClick={() => handlePrestarConta(cambista.id)} style={{ padding: '0.5rem 1rem' }}>Prestar Contas</button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrestarContas;
