import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "../header";
import Footer from "../footer";
import Search from "../search";
import Filters from "../filters";
import { Container } from "./styles";

function Layout({ title = "", sidebar = false, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const { value } = useSelector((state) => state.app);
  return (
    <>
      <Header title={title} />
      <Container>
        {sidebar && (
          <aside>
            <Search />
            {/* dont show filter while searching */}
            {!value && <Filters />}
          </aside>
        )}
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
Layout.propTypes = {
  title: PropTypes.string,
  sidebar: PropTypes.bool,
  children: PropTypes.any.isRequired,
};
export default Layout;
