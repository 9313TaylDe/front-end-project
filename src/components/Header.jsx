import logo from "../assets/Vector.png";
import circuloNotificacao from "../assets/Ellipse.png";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import React, { useState } from "react";
import "../header.css";
import { Link } from "react-router-dom";
import MenuNavegacao from "./MenuNavegacao";
import Links from "./Links";
const Header = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className="container-header">
        <div className="logo-header">
          <img src={logo} alt="" />
          <h1>Digital Store</h1>{" "}
        </div>
        <div className="input">
          <input type="text" placeholder="Procurar produto" />
          <i className="pi pi-search" id="search-peatch"></i>
        </div>
        <div className="button-user ">
          <Links id="new-account" font="12px" color="red">
            Cadastre-se
          </Links>
          <button className="login">
            <Links className="link-vermais" font="12px" color="red">
              Entrar
            </Links>
          </button>
        </div>
        <div className="container-cart">
          <Link className="pi pi-shopping-cart" to="#"></Link>
          <img className="circuloNotificacao" src={circuloNotificacao} alt="" />
          <span>
            <p className="informations">1</p>
          </span>
        </div>
        <MenuNavegacao />
      </div>
      <button className="menu-mobile" onClick={toggleMenu}>
        {isOpen ? (
          <div className="card-menu-mobile" onClick={toggleMenu}>
            <button onClick={toggleMenu}>olá</button>
          </div>
        ) : (
          <i className="pi pi-bars" onClick={toggleMenu}></i>
        )}
      </button>
    </header>
  );
};

export default Header;
