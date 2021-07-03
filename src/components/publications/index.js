import PropTypes from "prop-types";

import Card from "../card";
import { PublicationsList } from "./styles";

function Publications({ list }) {
  return (
    <PublicationsList>
      {list?.map((item) => (
        <li key={item.id}>
          <Card
            link={`/publication/${item.id}`}
            name={item.name}
            category={item.category}
          />
        </li>
      ))}
    </PublicationsList>
  );
}
Publications.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};
export default Publications;
