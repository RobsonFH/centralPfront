import React, { useState } from 'react';

function Loteria() {
  const [filtroNome, setFiltroNome] = useState('');
  const [dadosLoterias, setDadosLoterias] = useState([
    // Exemplo de dados de loterias
    {
      nome: 'Loteria 1',
      encerra: '18:00',
      tipo: 'Diária',
      segunda: true,
      terca: true,
      quarta: true,
      quinta: true,
      sexta: true,
      sabado: false,
      domingo: false,
      status: 'Ativo'
    },
    {
      nome: 'Loteria 2',
      encerra: '20:00',
      tipo: 'Semanal',
      segunda: false,
      terca: true,
      quarta: false,
      quinta: true,
      sexta: false,
      sabado: true,
      domingo: true,
      status: 'Bloqueada'
    },
    // Adicione mais dados conforme necessário
  ]);

  const handleFiltrarNome = (e) => {
    setFiltroNome(e.target.value);
  };

  const handleNovaLoteria = () => {
    console.log('Nova loteria criada');
    // Lógica para criar uma nova loteria
  };

  const handleExtracoes = () => {
    console.log('Extrações acionadas');
    // Lógica para abrir a página de extrações
  };

  return (
    <div>
      <h2>Loteria</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={handleExtracoes} style={{ padding: '0.5rem 1rem' }}>Extrações</button>
        <button style={{ padding: '0.5rem 1rem' }}>Modalidade</button>
        <button style={{ padding: '0.5rem 1rem' }}>Cotações</button>
        <input
          type="text"
          placeholder="Filtrar por Nome"
          value={filtroNome}
          onChange={handleFiltrarNome}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <button onClick={handleNovaLoteria} style={{ padding: '0.5rem 1rem' }}>Nova Loteria</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Encerra</th>
              <th>Tipo</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Sábado</th>
              <th>Domingo</th>
              <th>Editar</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dadosLoterias
              .filter(loteria => 
                filtroNome ? loteria.nome.toLowerCase().includes(filtroNome.toLowerCase()) : true
              )
              .map((loteria, index) => (
                <tr key={index}>
                  <td>{loteria.nome}</td>
                  <td>{loteria.encerra}</td>
                  <td>{loteria.tipo}</td>
                  <td>{loteria.segunda ? 'Sim' : 'Não'}</td>
                  <td>{loteria.terca ? 'Sim' : 'Não'}</td>
                  <td>{loteria.quarta ? 'Sim' : 'Não'}</td>
                  <td>{loteria.quinta ? 'Sim' : 'Não'}</td>
                  <td>{loteria.sexta ? 'Sim' : 'Não'}</td>
                  <td>{loteria.sabado ? 'Sim' : 'Não'}</td>
                  <td>{loteria.domingo ? 'Sim' : 'Não'}</td>
                  <td><button>Editar</button></td>
                  <td>{loteria.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Loteria;
