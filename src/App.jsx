import AuthProvider from "./components/AuthProvider";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layout";
import RouteProtected from "./components/RoutesProtected";
import CartProvider from "./components/CartProvider";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/Login";
import ProductsListing from "./pages/ProductsListing";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
    </CartProvider>
  );
};

export default App;
