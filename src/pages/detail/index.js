import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import * as actions from "../../redux/actions";
import Layout from "../../components/layout";
import Loading from "../../components/loading";
import Alert from "../../components/alert"

function Detail() {
  const { id } = useParams();
  const { publication, singleFailure, singleMessage, singleLoading } =
    useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getOne(id));
    // will unmount
    return () => {
      dispatch(actions.setOne({}));
    };
  }, [dispatch, id]);

  return (
    <Layout title={publication.name}>
      {publication.name && (
        <>
          <h2>{publication.name}</h2>
          <h3>Category: {publication.category}</h3>
          <h3>Level: {publication.level}</h3>
          <p>{publication.name}</p>
        </>
      )}
      {singleFailure && <Alert>Error: {singleMessage}</Alert>}
      {singleLoading && <Loading/>}
    </Layout>
  );
}
export default Detail;
