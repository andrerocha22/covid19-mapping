import React from "react";

import logo from "../../assets/images/logo.png";

import "./styles.scss";

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="menuItens">
        <a href="/">Início</a>
        <a href="/">Notícias</a>
        <a href="/">Sintomas</a>
        <a href="/">Recomedações</a>
      </div>
    </header>
  );
}
