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
            <Route
              path="/"
              element={
                signed ? (
                  <Navigate to="/home" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/login" element={<Login />} />
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
              path="/product/:id"
              element={
                <RouteProtected>
                  <Layout>
                    <ProductDetails />
                  </Layout>
                </RouteProtected>
              }
            />
            <Route
              path="/categorias"
              element={
                <RouteProtected>
                  <Layout>
                    <ProductsListing />
                  </Layout>
                </RouteProtected>
              }
            />
            <Route
              path="/meus-pedidos"
              element={
                <RouteProtected>
                  <Layout>
                    <Cart />
                  </Layout>
                </RouteProtected>
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
              path="/produtos"
              element={
                <RouteProtected>
                  <Layout>
                    <ProductsPage />
                  </Layout>
                </RouteProtected>
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
