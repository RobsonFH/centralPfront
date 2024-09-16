import React, { useState } from 'react';

function Vendas() {
  const [filtros, setFiltros] = useState({
    cambista: '',
    data: ''
  });

  const [dadosVendas, setDadosVendas] = useState([
    // Exemplo de dados de vendas
    { cambista: 'Cambista 1', quantidade: 100, entrada: 2000, saida: 1500, comissao: 300, saidaCambista: 200, saldoBanca: 5000, data: '2024-08-12' },
    { cambista: 'Cambista 2', quantidade: 80, entrada: 1600, saida: 1200, comissao: 240, saidaCambista: 160, saldoBanca: 4800, data: '2024-08-11' },
    // Adicione mais dados conforme necessário
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleFiltrar = () => {
    console.log('Filtros aplicados:', filtros);
    // Aqui você pode adicionar a lógica para filtrar os dados com base nos filtros aplicados
  };

  return (
    <div>
      <h2>Vendas</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          name="cambista"
          placeholder="Filtrar por Cambista"
          value={filtros.cambista}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <input
          type="date"
          name="data"
          value={filtros.data}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <button onClick={handleFiltrar} style={{ padding: '0.5rem 1rem' }}>Filtrar</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Cambista</th>
              <th>Quantidade</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Comissão Lançamentos</th>
              <th>Saída Cambista</th>
              <th>Saldo Banca</th>
            </tr>
          </thead>
          <tbody>
            {dadosVendas
              .filter(venda =>
                (filtros.cambista ? venda.cambista.includes(filtros.cambista) : true) &&
                (filtros.data ? venda.data === filtros.data : true)
              )
              .map((venda, index) => (
                <tr key={index}>
                  <td>{venda.cambista}</td>
                  <td>{venda.quantidade}</td>
                  <td>{venda.entrada}</td>
                  <td>{venda.saida}</td>
                  <td>{venda.comissao}</td>
                  <td>{venda.saidaCambista}</td>
                  <td>{venda.saldoBanca}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendas;
