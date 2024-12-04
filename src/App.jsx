import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import "../src/css/App.css";
import Layout from "./components/Layout";
import RouteProtected from "./components/RoutesProtected";
import CartProvider from "./components/CartProvider";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import ProductsListing from "./components/ProductOptions";
import ProductsPage from "./pages/ProductsPage";
import Cart, { CongratulationsToPay, PayConclued } from "./pages/Cart";
import Informacao from "../src/components/Footer";
import { AuthProvider } from "./backend/auth";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsProvider } from "./components/ProductsProvider";
import ListaProdutos from "./components/ListaProducts";

const App = () => {
  const Navigate = useNavigate();
  const { signed } = useAuth();
  const [loading, setLoading] = useState(true); // Indicador de carregamento

  useEffect(() => {
    setLoading(false); // Assume que a verificação inicial está concluída
  }, [signed]);

  if (loading) {
    return <p>Carregando...</p>; // Exibe algo enquanto verifica o estado
  }
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
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
                  <ProductsListing />
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
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
