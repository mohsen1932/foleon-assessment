import PropTypes from "prop-types";
import { useEffect } from "react";

import Header from "../header";
import Footer from "../footer";
import { Container } from "./styles";

function Layout({ title = "", sidebar = false, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Header title={title} />
      <Container>
        {sidebar && (
          <aside>
            {/* <Search />
            <Filters /> */}
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
