import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Not found: 404</h1>
      <Link to="/">Voltar para home</Link>
    </>
  );
};

export default NotFound;
