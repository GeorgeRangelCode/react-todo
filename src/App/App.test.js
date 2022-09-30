import { render, screen } from "@testing-library/react";
import App from ".";

test("renders Has completado title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Has completado/i);
  expect(linkElement).toBeInTheDocument();
});
