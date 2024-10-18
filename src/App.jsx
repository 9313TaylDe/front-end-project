import AuthProvider from "./components/AuthProvider";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import RouteProtected from "./components/RoutesProtected";
const App = () => {
  return (
    <AuthProvider>
      {/* <Layout>
        <Home />
      </Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<RouteProtected element={<Home />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
