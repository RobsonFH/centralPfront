import React, { useState } from 'react';

function Resultados() {
  const [filtros, setFiltros] = useState({
    modalidade: '',
    data: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleFiltrar = () => {
    console.log('Filtros aplicados:', filtros);
    // Lógica para filtrar os resultados com base na modalidade e data
  };

  return (
    <div>
      <h2>Resultados</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <select
          name="modalidade"
          value={filtros.modalidade}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        >
          <option value="">Selecione a Modalidade</option>
          <option value="modalidade1">Modalidade 1</option>
          <option value="modalidade2">Modalidade 2</option>
          {/* Adicione mais opções de modalidades conforme necessário */}
        </select>
        <input
          type="date"
          name="data"
          value={filtros.data}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ced4da' }}
        />
        <button onClick={handleFiltrar} style={{ padding: '0.5rem 1rem' }}>Filtrar</button>
      </div>

      {/* Aqui você pode adicionar a renderização dos resultados filtrados */}
      <div>
        <h3>Resultados Filtrados</h3>
        {/* Lógica para exibir os resultados filtrados */}
      </div>
    </div>
  );
}

export default Resultados;
