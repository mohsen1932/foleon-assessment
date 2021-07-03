import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { CardBox, CardImage } from "./styles";

function Card({ link, name, category }) {
  return (
    <CardBox>
      <Link to={{ pathname: link, state: "detail" }}>
        <CardImage />
        <h3>{name}</h3>
        <span>{category}</span>
      </Link>
    </CardBox>
  );
}
Card.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
};
export default Card;
