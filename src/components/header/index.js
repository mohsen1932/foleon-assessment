import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Nav } from "./styles";

function Header({ title }) {
  return (
    <Nav>
      <h1>{title}</h1>
      <Link to="/">Home</Link>
    </Nav>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
