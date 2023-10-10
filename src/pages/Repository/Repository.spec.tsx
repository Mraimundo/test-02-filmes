import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";
import { Repository } from ".";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Repository />
    </BrowserRouter>
  );
};

describe("Repository", () => {
  it("should render correctly", () => {
    renderComponent();

    waitFor(() =>
      expect(screen.getByText("GITHUB-EXPLORER")).toBeInTheDocument()
    );
    waitFor(() => expect(screen.getByText("Voltar")).toBeInTheDocument());
  });

  it("Checks that the link back to the main page works", () => {
    renderComponent();

    const linkElement = screen.getByText("Voltar");
    expect(linkElement).toBeInTheDocument();

    // Check if the link exists
    expect(linkElement).toBeInTheDocument();

    // Simulates a click on the link
    fireEvent.click(linkElement);

    // Checks if the URL has changed to the main page.
    expect(window.location.pathname).toBe("/");
  });
});
