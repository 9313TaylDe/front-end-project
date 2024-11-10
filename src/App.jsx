import AuthProvider from "./components/AuthProvider";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layout";
import RouteProtected from "./components/RoutesProtected";
import CartProvider from "./components/CartProvider";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import ProductsListing from "./pages/ProductsListing";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Informacao from "../src/components/Footer";
const App = () => {
  return (
    <CartProvider>
      {
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path={`/product/:id`}
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <RouteProtected
                element={
                  <Layout>
                    <Login />
                  </Layout>
                }
              />
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
            path="/cart"
            element={
              <Layout>
                <Cart />
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
            path="/"
            element={
              <RouteProtected
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
            }
          />
          <Route path="/sobre" element={<Informacao tipo="sobre" />} />
          <Route path="/seguranca" element={<Informacao tipo="seguranca" />} />
          <Route path="/wishlist" element={<Informacao tipo="wishlist" />} />
          <Route path="/blog" element={<Informacao tipo="blog" />} />
          <Route
            path="/trabalhe-conosco"
            element={<Informacao tipo="trabalhe-conosco" />}
          />
          <Route
            path="/meus-pedidos"
            element={<Informacao tipo="meus-pedidos" />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/produtos"
            element={
              <Layout>
                <ProductsPage />
              </Layout>
            }
          />{" "}
        </Routes>
      }
    </CartProvider>
  );
};

export default App;
