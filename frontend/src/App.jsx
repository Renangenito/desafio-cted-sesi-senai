import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Matricula from "./pages/Matricula.jsx";
import Course from "./pages/Course.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso" element={<Course />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="/matricula/:id" element={<Matricula />} />
        <Route path="/matricula" element={<Matricula />} />

      </Routes>
    </BrowserRouter>
  );
}