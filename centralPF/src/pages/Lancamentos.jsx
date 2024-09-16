import React, { useState } from 'react';

function Lancamentos() {
  const [filtros, setFiltros] = useState({
    operador: '',
    data: '',
    retirar: '',
    numero: ''
  });

  const [lancamentos, setLancamentos] = useState([
    // Exemplo de dados de lançamentos
    { id: 1, operador: 'Operador 1', valor: 100, tipo: 'Venda', data: '2024-08-08' },
    { id: 2, operador: 'Operador 2', valor: 200, tipo: 'Pagamento', data: '2024-08-07' },
    // Adicione mais dados conforme necessário
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleSave = () => {
    console.log('Filtros aplicados:', filtros);
    // Lógica para salvar os lançamentos
  };

  const handleDelete = (id) => {
    console.log('Excluir lançamento com id:', id);
    // Lógica para excluir o lançamento
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar com filtros */}
      <div style={{ width: '25%', padding: '1rem', borderRight: '1px solid #ced4da' }}>
        <h3>Filtros</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <select
            name="operador"
            value={filtros.operador}
            onChange={handleChange}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          >
            <option value="">Escolha o Operador</option>
            <option value="operador1">Operador 1</option>
            <option value="operador2">Operador 2</option>
            {/* Adicione mais operadores conforme necessário */}
          </select>
          <input
            type="date"
            name="data"
            value={filtros.data}
            onChange={handleChange}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          />
          <input
            type="text"
            name="retirar"
            placeholder="Retirar"
            value={filtros.retirar}
            onChange={handleChange}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          />
          <input
            type="text"
            name="numero"
            placeholder="Número"
            value={filtros.numero}
            onChange={handleChange}
            style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
          />
          <button onClick={handleSave} style={{ padding: '0.5rem', marginTop: '1rem' }}>Salvar</button>
        </div>
      </div>

      {/* Lista de lançamentos */}
      <div style={{ width: '75%', padding: '1rem' }}>
        <h3>Lista de Lançamentos</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {lancamentos.map((lancamento) => (
                <tr key={lancamento.id}>
                  <td>{lancamento.operador}</td>
                  <td>{lancamento.valor}</td>
                  <td>{lancamento.tipo}</td>
                  <td>{lancamento.data}</td>
                  <td>
                    <button onClick={() => handleDelete(lancamento.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Lancamentos;
