import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ProjetosPage from './pages/ProjetosPage';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/projetos" element={<ProjetosPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
