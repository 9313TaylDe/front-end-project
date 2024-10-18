const Button = ({
  width,
  height,
  backgroundColor,
  color,
  children,
  onClick,
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: color,
    border: "20%",
    cursor: "pointer",
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
