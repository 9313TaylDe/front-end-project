import "../Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Links = ({
  font,
  backgroundColor,
  color,
  textAlign,
  borderradius,
  width,
  height,
  heightt,
  position,
  topSide,
  leftSide,
  rightSide,
  bottomSide,
  children,
  border_b,
  border,
  padding,
  fontWeight,
  color_hover,
  backgroundColor_hover,
}) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    position: position,
    bottom: bottomSide,
    left: leftSide,
    right: rightSide,
    top: topSide,
    height: heightt,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 0,
    cursor: "pointer",
    borderRadius: "12px",
    border: hover ? border_b : border,
    backgroundColor: hover ? backgroundColor_hover : backgroundColor,
    padding: padding,
    fontSize: font,
    fontWeight: fontWeight,
    color: hover ? color_hover : color,
  };

  // const LinkStyle = {
  //   borderRadius: borderradius,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  //   backgroundColor: hover ? backgroundColor_hover : backgroundColor,
  //   textDecoration: "none",
  //   width: width,
  //   border: "none",
  //   height: height,
  // };

  return (
    <button
      className="buttons"
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link className="links-global" style={buttonStyle}>
        {children}
      </Link>
    </button>
  );
};

export default Links;
