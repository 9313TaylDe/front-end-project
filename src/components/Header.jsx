import logo from "../assets/Vector.png";
import circuloNotificacao from "../assets/Ellipse.png";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import React, { useEffect, useState } from "react";
import "../header.css";
import { Link } from "react-router-dom";
import MenuNavegacao from "./MenuNavegacao";
import Links from "./Links";
import Products from "./Products";
import ListaProducts from "./ListaProducts";
import { useContext } from "react";
import { CartContext } from "./CartProvider";
import CartProvider from "./CartProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleMenu = () => setIsOpen(!isOpen);
  const [isAdd, setIsAdded] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cart.length);
  }, [cart]);
  const IsProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const HandleAddToCart = () => {
    addToCart({
      id,
      nome,
      model,
      price,
      new_price,
      image,
      disccount,
    });
    setIsAdded(true);
  };

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
          <Links
            width="max-content"
            height="30px"
            borderradius="13px"
            font="12px"
            color_hover="#c92071"
            color="#c92071"
            backgroundColor="white"
            border_b="0.001px solid"
            border="none"
            heightt="max-content"
            padding="0 5px"
          >
            Cadastre-se
          </Links>

          <Links
            width="100%"
            height="30px"
            borderradius="10px"
            color_hover="#c92071"
            color="white"
            backgroundColor_hover="white"
            backgroundColor="#c91071"
            border="none"
            border_b="0.001px solid"
            heightt="max-content"
          >
            Entrar
          </Links>
        </div>
        <div className="container-cart">
          <Link className="pi pi-shopping-cart" to="#"></Link>
          <img className="circuloNotificacao" src={circuloNotificacao} alt="" />
          <span>
            <i className="informations">{itemCount}</i>
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
                font="12px"
                width="max-content"
                height="50%"
                borderradius="10px"
                border="none"
                border_b="none"
                backgroundColor_hover="black"
                color=" #c92071"
                color_hover="white"
                fontWeight="900"
                padding="2.8px"
              >
                Cadastre-se
              </Links>

              <Links
                className="link-login2"
                width="60px"
                height="50%"
                borderradius="10px"
                backgroundColor="black"
                font="12px"
                color="white"
                color_hoer="#c92071"
                border="none"
                border_b="none"
                fontWeight="900"
              >
                Entrar
              </Links>
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
