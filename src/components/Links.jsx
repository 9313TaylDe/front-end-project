import "../Home.css";

import { Link } from "react-router-dom";
const Links = ({ font, color, children }) => {
  const LinkStyle = {
    color: color,
    textDecoration: "none",
    fontSize: font,
    marginLeft: "20px",
  };
  return (
    <Link className="links-global" style={LinkStyle}>
      {children}
    </Link>
  );
};

export default Links;
