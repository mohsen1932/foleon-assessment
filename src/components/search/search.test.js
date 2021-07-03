import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import * as actions from "../../redux/actions";
import Search from ".";

const dispatchedActions = [];
const fakeStore = {
  getState: () => ({
    app: {
      recipeDetail: {},
    },
  }),
  subscribe: () => {},
  dispatch: (action) => dispatchedActions.push(action),
};

describe("Search Component", () => {
  test("renders", () => {
    const { container, getByText } = render(
      <ReduxProvider store={fakeStore}>
        <Search />
      </ReduxProvider>,
    );
    const btn = getByText("Search");
    expect(container).toBeTruthy();
    expect(btn).toBeTruthy();
  });
  test("handleSumbit", () => {
    const { container, getByText } = render(
      <ReduxProvider store={fakeStore}>
        <Search />
      </ReduxProvider>,
    );
    const btn = getByText("Search");
    const input = container.querySelector(".input");
    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(btn);
    expect(dispatchedActions).toContainEqual(actions.search("hello"));
  });
});
