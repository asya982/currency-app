import { render, screen } from "@testing-library/react";
import AboutPage from "../AboutPage";

describe("AboutPage Component", () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  test("renders About header", () => {
    const header = screen.getByRole("heading", { name: /about/i });
    expect(header).toBeInTheDocument();
  });

  test("renders money image", () => {
    const moneyImage = screen.getByRole("img", {
      name: /money from CK Jeans/i,
    });
    expect(moneyImage).toBeInTheDocument();
  });
});
