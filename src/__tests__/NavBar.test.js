import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("each <a> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<NavBar />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  expect(container.querySelectorAll("a"))
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i))
  expect(screen.queryByText(/about/i))
  expect(screen.queryByText(/projects/i))
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect("#home");
  expect("#about");
  expect("#projects");
});
