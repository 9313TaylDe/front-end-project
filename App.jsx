import { useNavigate } from "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import AuthProvider, { AuthContext } from "./src/components/AuthProvider";
import CartProvider from "./src/components/CartProvider";

import LoginPage from "./src/pages/Login";
import UnauthorizedPage from "./src/pages/UnauthorizedPage";
import Home from "./src/pages/HomePage";
import ListaProdutos from "./src/components/ListaProducts";
import { Cart } from "./src/pages/Cart";
import { PayConclued, CongratulationsToPay } from "./src/pages/Cart";
import { ProductsPage } from "./src/pages/ProductsPage";
import NotFound from "./src/pages/NotFound";

import RouteProtected from "./src/components/RoutesProtected";
import Layout from "./src/components/Layout";
import useAuth from "./src/hooks/useAuth";

const App = () => {
  const Navigate = useNavigate();
  const { signed } = useAuth;
  const [loading, setLoading] = useState(true); // Indicador de carregamento

  useEffect(() => {
    setLoading(false); // Assume que a verificação inicial está concluída
  }, [signed]);

  if (loading) {
    return <p>Carregando...</p>; // Exibe algo enquanto verifica o estado
  }
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route
            path="/home"
            element={
              <RouteProtected>
                <Layout>
                  <Home />
                </Layout>
              </RouteProtected>
            }
          />

          <Route
            path="/categorias"
            element={
              <Layout>
                <ListaProdutos />
              </Layout>
            }
          />
          <Route
            path="/meus-pedidos"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <RouteProtected>
                <Layout>
                  <PayConclued />
                </Layout>
              </RouteProtected>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Layout>
                <ProductsPage />
              </Layout>
            }
          />

          <Route
            path="/Products"
            element={
              <Layout>
                <ListaProdutos />
              </Layout>
            }
          />
          <Route
            path="/congratulations-to-pay"
            element={
              <RouteProtected>
                <Layout>
                  <CongratulationsToPay />
                </Layout>
              </RouteProtected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
