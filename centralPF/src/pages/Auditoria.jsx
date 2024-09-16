import React, { useState } from 'react';

function Auditoria() {
  const [filtros, setFiltros] = useState({
    tipo: '',
    usuario: '',
    ordenadoPor: ''
  });

  const [dadosAuditoria, setDadosAuditoria] = useState([
    // Exemplo de dados de auditoria
    { id: 1, usuario: 'Usuario 1', tipo: 'Tipo 1', data: '2024-08-12', descricao: 'Descrição do evento 1' },
    { id: 2, usuario: 'Usuario 2', tipo: 'Tipo 2', data: '2024-08-11', descricao: 'Descrição do evento 2' },
    // Adicione mais dados conforme necessário
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleFiltrar = () => {
    console.log('Filtros aplicados:', filtros);
    // Lógica para filtrar os dados de auditoria com base nos filtros
    // Exemplo simples: Apenas um log dos filtros aplicados
  };

  return (
    <div>
      <h2>Auditoria</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <select
          name="tipo"
          value={filtros.tipo}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        >
          <option value="">Selecione o Tipo</option>
          <option value="tipo1">Tipo 1</option>
          <option value="tipo2">Tipo 2</option>
          {/* Adicione mais opções de tipos conforme necessário */}
        </select>
        <select
          name="usuario"
          value={filtros.usuario}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        >
          <option value="">Selecione o Usuário</option>
          <option value="usuario1">Usuário 1</option>
          <option value="usuario2">Usuário 2</option>
          {/* Adicione mais opções de usuários conforme necessário */}
        </select>
        <select
          name="ordenadoPor"
          value={filtros.ordenadoPor}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        >
          <option value="">Ordenar Por</option>
          <option value="data">Data</option>
          <option value="tipo">Tipo</option>
          <option value="usuario">Usuário</option>
          {/* Adicione mais opções de ordenação conforme necessário */}
        </select>
        <button onClick={handleFiltrar} style={{ padding: '0.5rem 1rem' }}>Filtrar</button>
      </div>

      <h3>Dados de Auditoria Filtrados</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {dadosAuditoria.map((dado) => (
              <tr key={dado.id}>
                <td>{dado.id}</td>
                <td>{dado.usuario}</td>
                <td>{dado.tipo}</td>
                <td>{dado.data}</td>
                <td>{dado.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Auditoria;
