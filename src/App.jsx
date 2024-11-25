import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import "../src/css/App.css";
import Layout from "./components/Layout";
import RouteProtected from "./components/RoutesProtected";
import CartProvider from "./components/CartProvider";
import ProductDetails from "./pages/ProductDetails";
import Login, { NewAccount } from "./pages/Login";
import ProductsListing from "./components/ProductOptions";
import ProductsPage from "./pages/ProductsPage";
import Cart, { CongratulationsToPay } from "./pages/Cart";
import Informacao from "../src/components/Footer";
import { AuthProvider } from "./backend/auth";
import UnauthorizedPage from "./pages/UnauthorizedPage";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<NotFound />} />

          {/* Rotas Protegidas */}
          <Route
            path="/"
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
            path="/cart"
            element={
              <RouteProtected>
                <Layout>
                  <Cart />
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
          <Route
            path="/sobre"
            element={
              <RouteProtected>
                <Informacao tipo="sobre" />
              </RouteProtected>
            }
          />
          <Route
            path="/seguranca"
            element={
              <RouteProtected>
                <Informacao tipo="seguranca" />
              </RouteProtected>
            }
          />
          <Route
            path="/wishlist"
            element={
              <RouteProtected>
                <Informacao tipo="wishlist" />
              </RouteProtected>
            }
          />
          <Route
            path="/blog"
            element={
              <RouteProtected>
                <Informacao tipo="blog" />
              </RouteProtected>
            }
          />
          <Route
            path="/trabalhe-conosco"
            element={
              <RouteProtected>
                <Informacao tipo="trabalhe-conosco" />
              </RouteProtected>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
