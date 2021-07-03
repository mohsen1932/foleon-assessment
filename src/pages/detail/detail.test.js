import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Detail from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "153072",
  }),
}));

const fakeStore = {
  getState: () => ({
    app: {
      publication: {
        name: "Buyer Enablement In 2020 (copy 1)",
        level: "T2",
        category: "ebook",
      },
    },
  }),
  subscribe: () => {},
  dispatch: () => {},
};

describe("Detail page", () => {
  test("renders", () => {
    const { container, getByText, getAllByText } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <Detail />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getAllByText("Buyer Enablement In 2020 (copy 1)")).toBeTruthy();
    expect(getByText(/ebook/)).toBeTruthy();
    expect(getByText(/T2/)).toBeTruthy();
  });

  test("failure", () => {
    fakeStore.getState = () => ({
      app: {
        singleFailure: true,
        singleMessage: "error message",
        publication: {},
      },
    });
    const { container, getByText } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <Detail />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/error message/)).toBeTruthy();
  });

  test("loading", () => {
    fakeStore.getState = () => ({
      app: {
        singleLoading: true,
        publication: {},
      },
    });
    const { container } = render(
      <BrowserRouter>
        <ReduxProvider store={fakeStore}>
          <Detail />
        </ReduxProvider>
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(container.querySelector(".loading")).toBeTruthy();
  });
});
