import React, { useState } from 'react';

function CriarGerente() {
  const [formData, setFormData] = useState({
    criadoEm: '',
    gerente: '',
    login: '',
    senha: '',
    tipo: 'gerente',
    cotacaoGeral: '',
    cotacaoDezena: '',
    cotacaoGrupo: '',
    cotacaoMilharBrinde: '',
    endereco: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados do gerente
    console.log('Dados do gerente:', formData);
  };

  return (
    <div>
      <h2>Criar Novo Gerente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Criado em:</label>
          <input type="date" name="criadoEm" value={formData.criadoEm} onChange={handleChange} required />
        </div>
        <div>
          <label>Gerente:</label>
          <input type="text" name="gerente" value={formData.gerente} onChange={handleChange} required />
        </div>
        <div>
          <label>Login:</label>
          <input type="text" name="login" value={formData.login} onChange={handleChange} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        </div>
        <div>
          <label>Tipo:</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="cambista">Cambista</option>
            <option value="gerente">Gerente</option>
          </select>
        </div>
        <div>
          <label>Cotações Geral:</label>
          <input type="number" name="cotacaoGeral" value={formData.cotacaoGeral} onChange={handleChange} required />
        </div>
        <div>
          <label>Cotações Dezena:</label>
          <input type="number" name="cotacaoDezena" value={formData.cotacaoDezena} onChange={handleChange} required />
        </div>
        <div>
          <label>Cotações Grupo:</label>
          <input type="number" name="cotacaoGrupo" value={formData.cotacaoGrupo} onChange={handleChange} required />
        </div>
        <div>
          <label>Cotações Milhar Brinde:</label>
          <input type="number" name="cotacaoMilharBrinde" value={formData.cotacaoMilharBrinde} onChange={handleChange} required />
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CriarGerente;
