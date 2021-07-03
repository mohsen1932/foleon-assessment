import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { cats } from "../../test/mock-data";
import * as actions from "../../redux/actions";
import Filter from ".";

const dispatchedActions = [];
const fakeStore = {
  getState: () => ({
    app: {
      categories: cats,
      filter: "",
      categoriesFailure: false,
      categoriesMessage: "",
      categoriesLoading: false,
    },
  }),
  subscribe: () => {},
  dispatch: (action) => dispatchedActions.push(action),
};

describe("Filter Component", () => {
  test("renders", () => {
    const { container, getByText } = render(
      <ReduxProvider store={fakeStore}>
        <Filter />
      </ReduxProvider>,
    );
    expect(container).toBeTruthy();
    expect(getByText("Categories:")).toBeTruthy();
    expect(getByText("Product Catalog")).toBeTruthy();
  });
  test("handleFilter", () => {
    const { getByText } = render(
      <ReduxProvider store={fakeStore}>
        <Filter />
      </ReduxProvider>,
    );
    const fltr = getByText("Annual Report");
    fireEvent.click(fltr);
    expect(dispatchedActions).toContainEqual(actions.setFilter("annual_report"));
  });
});
