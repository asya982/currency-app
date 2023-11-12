import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavItems from "../NavItems";

describe("NavItems Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <NavItems />
      </Router>
    );
  });

  test("renders correctly", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders correct nav links", () => {
    const mainPageLink = screen.getByText("Main page");
    const ratesLink = screen.getByText("Rates");
    const aboutLink = screen.getByText("About");

    expect(mainPageLink).toBeInTheDocument();
    expect(ratesLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
