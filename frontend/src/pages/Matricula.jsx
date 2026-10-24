import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourseById } from "../api.js";
import NavBarMin from "../components/NavBarMin.jsx";
import Footer from "../components/Footer.jsx";
import bg from "../assets/hero-image.png";
import logo from "../assets/logo-sesi-industria-primary.svg";
import CurseDetail from "../components/CurseDetail.jsx";
import CurseBenefits from "../components/CourseBenefits.jsx";
import AboutCourse from "../components/AboutCourse.jsx";
import Depoimentos from "../components/Depoimentos.jsx";
import Contact from "../components/Contact.jsx";

export default function Matricula() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCourseById(id).then(setCourse);
    }
  }, [id]);

  return (
    <>
      <NavBarMin backgroundSrc={bg} logoSrc={logo} onConhecerCursos={() => navigate('/')} />
      <CurseDetail />
      <CurseBenefits />
      <AboutCourse />
      <Depoimentos
        colors={{
          bg: "#fcd19c",
          card: "#ffffff",
          text: "#0c0c0d",
          textMuted: "#0c0c0d",
          controls: "#0c0c0d",
          header: "#ffffff"
        }}
      />
      <Contact />
      <Footer />
    </>
  );
}