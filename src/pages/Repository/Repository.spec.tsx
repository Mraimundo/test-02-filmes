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

    // Verifica se o link existe
    expect(linkElement).toBeInTheDocument();

    // Simula um clique no link
    fireEvent.click(linkElement);

    // Verifica se a URL mudou para a página principal.
    expect(window.location.pathname).toBe("/");
  });
});
