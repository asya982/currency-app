import { render, fireEvent } from "@testing-library/react";
import Navigation from "../Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Navigation", () => {
  it("toggles open state when menu icon is clicked", () => {
    const setOpenMock = jest.fn();
    const { getByLabelText } = render(
      <BrowserRouter>
        <Navigation open={false} setOpen={setOpenMock} />
      </BrowserRouter>
    );

    fireEvent.click(getByLabelText("open drawer"));

    expect(setOpenMock).toHaveBeenCalledWith(true);
  });

  it("toggles open state when close icon is clicked", () => {
    const setOpenMock = jest.fn();
    const { getByLabelText } = render(
      <BrowserRouter>
        <Navigation open={true} setOpen={setOpenMock} />
      </BrowserRouter>
    );

    fireEvent.click(getByLabelText("close drawer"));

    expect(setOpenMock).toHaveBeenCalledWith(false);
  });

  it("renders drawer according to open state", () => {
    const setOpenMock = jest.fn();
    const { queryByRole } = render(
      <BrowserRouter>
        <Navigation open={true} setOpen={setOpenMock} />
      </BrowserRouter>
    );

    const drawer = queryByRole("presentation");

    expect(drawer).toBeInTheDocument();
  });
});
