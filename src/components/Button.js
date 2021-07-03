const Button = ({ text, onClick }) => {
  return (
    <button className="btn" onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add text",
};

export default Button;
