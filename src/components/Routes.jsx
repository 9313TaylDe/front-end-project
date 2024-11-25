import { Route, Router } from "react-router-dom";
import RouteProtected from "./RoutesProtected";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<RouteProtected element={<Home />} />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
