import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import List from ".";
import { data } from "../../test/mock-data";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "153072",
  }),
}));

const fakeStore = {
  getState: () => ({
    app: {
      list: data.edition,
      categories : []
    },
  }),
  subscribe: () => {},
  dispatch: () => {},
};

describe("List page", () => {
  test("renders with mock data", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <List />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/footer/)).toBeTruthy();
    expect(getByText(/List of my publications/)).toBeTruthy();
    expect(getByText(/Why Content Experiences?/)).toBeTruthy();
    expect(container.querySelectorAll("li")).toHaveLength(15);
  });

  test("failure", () => {
    fakeStore.getState = () => ({
      app: {
        listFailure: true,
        listMessage: "error message",
        list: [],
        categories : []
      },
    });
    const { container, getByText } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <List />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/error message/)).toBeTruthy();
  });

  test("loading", () => {
    fakeStore.getState = () => ({
      app: {
        listLoading: true,
        list: [],
        categories : []
      },
    });
    const { container } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <List />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(container.querySelector(".loading")).toBeTruthy();
  });

  test("no item", () => {
    fakeStore.getState = () => ({
      app: {
        listLoading: false,
        list: [],
        categories : []
      },
    });
    const { container,getByText } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <List />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/There is no item/)).toBeTruthy();
  });
});
