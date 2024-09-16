import React, { useState } from 'react';

function Caixa() {
  const [entradas, setEntradas] = useState({
    entrada: 1000,
    entradaAberta: 500,
    naoPago: 200,
    pagoComissao: 300,
    total: 1500,
  });

  const [bicheiros, setBicheiros] = useState([
    { id: 1, nome: 'Bicheiro 1', valor: 100, tipo: 'Venda', data: '2024-08-08' },
    { id: 2, nome: 'Bicheiro 2', valor: 200, tipo: 'Pagamento', data: '2024-08-08' },
    // Adicione mais dados conforme necessário
  ]);

  const handleResumoFechamento = () => {
    console.log('Resumo de fechamento de caixa:', entradas);
    // Aqui você pode adicionar a lógica para gerar o resumo do fechamento de caixa
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar com informações de entrada */}
      <div style={{ width: '25%', padding: '1rem', borderRight: '1px solid #ced4da' }}>
        <h3>Informações de Entrada</h3>
        <ul>
          <li>Entrada: {entradas.entrada}</li>
          <li>Entrada Aberta: {entradas.entradaAberta}</li>
          <li>Não Pago: {entradas.naoPago}</li>
          <li>Pago Comissão: {entradas.pagoComissao}</li>
          <li>Total: {entradas.total}</li>
        </ul>
        <button onClick={handleResumoFechamento} style={{ marginTop: '1rem' }}>Resumo Fechamento</button>
      </div>

      {/* Lista central com informações dos bicheiros */}
      <div style={{ width: '75%', padding: '1rem' }}>
        <h3>Movimentações do Dia</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome do Bicheiro</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {bicheiros.map((bicheiro) => (
                <tr key={bicheiro.id}>
                  <td>{bicheiro.nome}</td>
                  <td>{bicheiro.valor}</td>
                  <td>{bicheiro.tipo}</td>
                  <td>{bicheiro.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Caixa;
