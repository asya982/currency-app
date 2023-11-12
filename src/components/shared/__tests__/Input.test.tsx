import { render, fireEvent, screen } from "@testing-library/react";
import Input from "../Input/Input";

describe("Input Component", () => {
  test("renders without crashing", () => {
    render(<Input handleChange={jest.fn()} value="" />);
  });

  test("calls handleChange when input changes", () => {
    const handleChange = jest.fn();
    render(<Input handleChange={handleChange} value="" />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "123" } });
    expect(handleChange).toHaveBeenCalledWith("123");
  });

  test("Doesn`t call handleChange when input changes with letter", () => {
    const handleChange = jest.fn();
    render(<Input handleChange={handleChange} value="" />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "hello" },
    });
    expect(handleChange).not.toBeCalled();
  });

  test("respects label prop", () => {
    render(<Input handleChange={jest.fn()} value="" label="Test Label" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });
});
