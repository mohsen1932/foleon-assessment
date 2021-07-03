import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { data } from "../../test/mock-data"
import Publications from ".";

describe("Publications Component", () => {
  test("renders", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <Publications list={data.edition} />
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/Why Content Experiences/)).toBeTruthy();
    expect(getByText(/Buyer Enablement In 2020/)).toBeTruthy();
    expect(container.querySelectorAll("li")).toHaveLength(15)
  });
});
