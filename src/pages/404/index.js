import { Link } from "react-router-dom";

import Layout from "../../components/layout";

function NotFound() {
  return (
    <Layout title="404 Not found">
      <Link to="/"> Back to Home</Link>
    </Layout>
  );
}
export default NotFound;
