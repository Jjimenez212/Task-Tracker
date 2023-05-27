import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {};

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Open" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.protoType = {
  title: PropTypes.string.isRequired,
};

/* const headingStyle = {
  color: "crimson",
  backgroundColor: "grey",
}; */

export default Header;
