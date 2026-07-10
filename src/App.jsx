import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Participantes from "./pages/Participantes";
import Acerca from "./pages/Acerca";
import Inscripciones from "./pages/Inscripciones";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;