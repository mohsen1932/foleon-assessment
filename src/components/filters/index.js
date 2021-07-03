import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import * as actions from "../../redux/actions";
import Loading from "../../components/loading";
import Alert from "../../components/alert";
import { FilterBox } from "./styles";

function Filters() {
  const {
    filter,
    categories,
    categoriesFailure,
    categoriesMessage,
    categoriesLoading,
  } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(actions.getCats());
    }
  }, [dispatch, categories.length]);

  const handleFilter = (f) => {
    if (f === filter) return;
    dispatch(actions.setFilter(f));
  };

  return (
    <FilterBox>
      <div>Categories:</div>
      {!categoriesLoading && categories && categories.length === 0 && (
        <div>There is no category</div>
      )}
      {categoriesFailure && <Alert>Error: {categoriesMessage}</Alert>}
      {categoriesLoading && <Loading />}
      {categories && categories.length > 0 && (
        <ul>
          <li
            key="all"
            className={filter === "All" ? "active" : ""}
            onClick={() => handleFilter("All")}
          >
            All
          </li>
          {categories.map((item) => (
            <li
              key={item.key}
              className={filter === item.key ? "active" : ""}
              onClick={() => handleFilter(item.key)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </FilterBox>
  );
}

export default Filters;
