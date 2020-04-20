import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import iconMenu from "../../assets/images/icon-menu.svg";
import "./styles.scss";

export default function Header() {
  const responsiveHandler = () => {
    var x = document.getElementById("header");
    if (x.className === "topbar") {
      x.className += " responsive";
    } else {
      x.className = "topbar";
    }
  };

  const setActive = () =>{

  }

  return (
    <div className="topbar" id="header">
      <div className="icon">
        <img src={logo} alt="logo" />
        <button
          onClick={() => {
            responsiveHandler();
          }}
        >
          <img src={iconMenu} alt="icon-menu" />
        </button>
      </div>
      <div className="items">
        <ul className="list">
          <li className="listItems">
            <Link className="link" to="/">
              Início
            </Link>
          </li>
          <li className="listItems">
            <Link className="link" to="/noticias">
              Notícias
            </Link>
          </li>
          <li className="listItems">
            <Link className="link" to="/sobre-a-doenca">
              Sobre a doença
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
