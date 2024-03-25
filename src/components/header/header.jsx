import React from "react";
import Logo from "../../assets/images/Componentes/Header/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const history = useNavigate();
  const navigate = (link = "") => {
    history(link);
  };
  return (
    <header className="headerMainClass">
      <div
        className="imgHeader"
        onClick={() => {
          navigate("");
        }}
      >
        <img src={Logo} alt="Logo" />
      </div>
      <div
        className="itemMenuGeneral"
        onClick={() => {
          navigate("/aboutUs");
        }}
      >
        <p>Acerca de nosotros</p>
      </div>
      <div
        className="itemMenuGeneral"
        onClick={() => {
          navigate("/PQR");
        }}
      >
        <p>Preguntas frecuentes</p>
      </div>
      <div
        className="itemMenuGeneral"
        onClick={() => {
          navigate("/Info");
        }}
      >
        <p>Obten mas información</p>
      </div>
    </header>
  );
}
