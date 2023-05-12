import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ProjetosPage from './pages/ProjetosPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjetosPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
