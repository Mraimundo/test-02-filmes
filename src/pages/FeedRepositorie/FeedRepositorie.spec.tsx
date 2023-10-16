import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { FeedRepositorie } from ".";

import axiosMock from "../../__mocks__/axios.mock";

jest.mock("../../__mocks__/axios.mock");

const renderComponent = () => {
  render(
    <BrowserRouter>
      <FeedRepositorie />
    </BrowserRouter>
  );
};

describe("Repository", () => {
  it("should render correctly", () => {
    renderComponent();

    const inputElement = screen.getByPlaceholderText(
      "Busque por repositório (autor/nome)"
    );
    const searchButton = screen.getByText("Buscar");

    expect(inputElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("should allows searching for repositories", async () => {
    renderComponent();

    axiosMock.get.mockResolvedValue({
      repository: {
        id: 1,
        full_name: "facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        owner: {
          login: "facebook",
          avatar_url: "https://example.com/avatar.png",
          url: "https://github.com/facebook",
        },
      },
    });

    const inputElement = screen.getByPlaceholderText(
      "Busque por repositório (autor/nome)"
    );
    const searchButton = screen.getByText("Buscar");

    fireEvent.change(inputElement, { target: { value: "facebook/react" } });
    fireEvent.submit(searchButton);

    await waitFor(() => {
      const repoItem = screen.getByText("facebook/react");
      expect(repoItem).toBeInTheDocument();
    });
  });

  it("should handles search error", async () => {
    renderComponent();

    const inputElement = screen.getByPlaceholderText(
      "Busque por repositório (autor/nome)"
    );
    const searchButton = screen.getByText("Buscar");

    fireEvent.change(inputElement, { target: { value: "non-existent-repo" } });
    fireEvent.submit(searchButton);

    await waitFor(() => {
      const errorElement = screen.getByText(
        "Erro na busca por esse repositório"
      );
      expect(errorElement).toBeInTheDocument();
    });
  });
});
