import PropTypes from "prop-types";

const Title = ({ name, variant = "normal", color = "black", bold = false }) => {
  let Component = "p";

  switch (variant) {
    case "title":
      Component = "h2";
      break;
    case "normal":
    default:
      Component = "p";
      break;
  }

  const style = { color, fontWeight: bold ? "700" : "400" };

  return <Component style={style}>{name}</Component>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["normal", "title"]),
  color: PropTypes.string,
  bold: PropTypes.bool,
};

export default Title;
