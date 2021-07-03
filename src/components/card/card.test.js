import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from ".";

describe("Card Component", () => {
  test("renders", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <Card link="/simple-link" name="simple name" category="ebook" />
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/simple name/)).toBeTruthy();
    expect(getByText(/ebook/)).toBeTruthy();
    const ahref = container.querySelector("a");
    expect(ahref.getAttribute("href")).toEqual("/simple-link");
  });
});
