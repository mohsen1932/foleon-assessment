import PropTypes from "prop-types";

import { AlertBox } from "./styles";

function Alert({ children }) {
  return <AlertBox>{children}</AlertBox>;
}
Alert.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Alert;
