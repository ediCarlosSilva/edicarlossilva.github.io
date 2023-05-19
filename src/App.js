import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ProjetosPage from './pages/ProjetosPage';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Experiencia from './pages/Experiencia';
import Footer from './components/Footer';
import SobreMim from './pages/SobreMim';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Academico from './pages/Academico';
import NaoEncontrado from './pages/NaoEncontrado';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Formacao" element={<Academico />} />
        <Route path="/Experiencia" element={<Experiencia />} />
        <Route path="/Projetos" element={<ProjetosPage />} />

        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
