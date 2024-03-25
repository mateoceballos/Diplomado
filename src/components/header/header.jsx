import React from "react";
import Logo from "../../assets/images/Componentes/Header/logo.jpg";

export default function Header() {
  return (
    <header className="headerMainClass">
      <div className="imgHeader">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="itemMenuGeneral">
        <p>Inicio</p>
      </div>
      <div className="itemMenuGeneral">
        <p>Preguntas frecuentes</p>
      </div>
      <div className="itemMenuGeneral">
        <p>Obten mas información</p>
      </div>
    </header>
  );
}
