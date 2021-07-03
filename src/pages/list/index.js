import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import * as actions from "../../redux/actions";
import Loading from "../../components/loading";
import Alert from "../../components/alert";
import Layout from "../../components/layout";
import Publications from "../../components/publications";
import { Btn } from "./styles";

function List() {
  const {
    listFailure,
    listLoading,
    list,
    listMessage,
    page,
    total,
    value,
    filter,
  } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getList(1));
    // will unmount
    return () => {
      dispatch(actions.setList([]));
      dispatch(actions.setCats([]));
      dispatch(actions.setFilter("All"));
      dispatch(actions.setValue(""));
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!listFailure && !listLoading) {
      const f = filter === "All" ? "" : filter;
      dispatch(actions.getList(page + 1, f));
    }
  };

  return (
    <Layout title="List of my publications" sidebar>
      {!listLoading && list && list.length === 0 && <div>There is no item</div>}
      {list && list.length > 0 && <Publications list={list} />}
      {listFailure && <Alert>Error: {listMessage}</Alert>}
      {listLoading && <Loading />}
      {!listLoading && !listFailure && page < total && !value && (
        <Btn rel="button" onClick={handleLoadMore}>
          Load more
        </Btn>
      )}
    </Layout>
  );
}
export default List;
