import "../Home.css";

import { Link } from "react-router-dom";
const Links = ({ font, color, textAling, width, height, children }) => {
  const LinkStyle = {
    color: color,
    textDecoration: "none",
    fontSize: font,
    textAling: textAling,
    width: width,
    height: height,
    cursor: "pointer",
  };
  return (
    <Link className="links-global" style={LinkStyle}>
      {children}
    </Link>
  );
};

export default Links;
