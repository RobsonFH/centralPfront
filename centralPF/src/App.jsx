import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Cambista from './pages/Cambista';
import Gerente from './pages/Gerente';
import Saldo from './pages/Saldo';
import Caixa from './pages/Caixa';
import Bilhetes from './pages/Bilhetes';
import Lancamentos from './pages/Lancamentos';
import PrestarContas from './pages/PrestarContas';
import Resultados from './pages/Resultados';
import Auditoria from './pages/Auditoria';
import Vendas from './pages/Vendas';
import Comissoes from './pages/Comissoes';
import Loterias from './pages/Loterias';
import CriarCambista from './pages/CriarCambista'; // Importação do novo componente
import CriarGerente from './pages/CriarGerente';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '1rem', background: '#f0f0f0' }}>
        <ul>
          <li><Link to="/cambista">Cambista</Link></li>
          <li><Link to="/gerente">Gerente</Link></li>
          <li><Link to="/saldo">Saldo</Link></li>
          <li><Link to="/caixa">Caixa</Link></li>
          <li><Link to="/bilhetes">Bilhetes</Link></li>
          <li><Link to="/lancamentos">Lançamentos</Link></li>
          <li><Link to="/prestar-contas">Prestar Contas</Link></li>
          <li><Link to="/resultados">Resultados</Link></li>
          <li><Link to="/auditoria">Auditoria</Link></li>
          <li><Link to="/vendas">Vendas</Link></li>
          <li><Link to="/comissoes">Comissões</Link></li>
          <li><Link to="/loterias">Loterias</Link></li>
        </ul>
      </nav>
      <main style={{ padding: '1rem', flex: 1 }}>
        <Routes>
          <Route path="/cambista" element={<Cambista />} />
          <Route path="/gerente" element={<Gerente />} />
          <Route path="/saldo" element={<Saldo />} />
          <Route path="/caixa" element={<Caixa />} />
          <Route path="/bilhetes" element={<Bilhetes />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/prestar-contas" element={<PrestarContas />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/comissoes" element={<Comissoes />} />
          <Route path="/loterias" element={<Loterias />} />
          <Route path="/cambista/criar" element={<CriarCambista />} /> {/* Nova rota */}
          <Route path="/gerente" element={<Gerente />} />
          <Route path="/gerente/criar" element={<CriarGerente />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
