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
        <div className="container-user">
          <button className="cadastre">
            <Links width="max-content" color=" #c92071">
              Cadastre-se
            </Links>
          </button>
          <button className="login">
            <Links width="max-content" color="white">
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
      <div className="menu-mobile" onClick={toggleMenu}>
        {isOpen ? (
          <>
            <i className="pi pi-times"></i>
            <div className="div-menu-mobile" onClick={toggleMenu}>
              <Links
                className="new-account2"
                font="10px"
                width="max-content"
                color=" #c92071"
                back
              >
                Cadastre-se
              </Links>
              <button className="login2">
                <Links className="link-login2" font="10px" color="white">
                  Entrar
                </Links>
              </button>
            </div>{" "}
          </>
        ) : (
          <div className="container-open-menu">
            <i className="pi pi-angle-left" onClick={toggleMenu}></i>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
