import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Repository } from ".";

import axiosMock from "../../__mocks__/axios.mock";

jest.mock("../../__mocks__/axios.mock");

const renderComponentRepository = (initialEntries: any) => {
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/repositories/:repository/*" element={<Repository />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("Repository", () => {
  it("should render correctly", () => {
    renderComponentRepository(["/repositories/facebook/react"]);

    waitFor(() =>
      expect(screen.getByText("GITHUB-EXPLORER")).toBeInTheDocument()
    );
    waitFor(() => expect(screen.getByText("Voltar")).toBeInTheDocument());
  });

  it("should checks that the link back to the main page works", () => {
    renderComponentRepository(["/repositories/facebook/react"]);

    const linkElement = screen.getByText("Voltar");
    expect(linkElement).toBeInTheDocument();

    // Check if the link exists
    expect(linkElement).toBeInTheDocument();

    // Simulates a click on the link
    fireEvent.click(linkElement);

    // Checks if the URL has changed to the main page.
    expect(window.location.pathname).toBe("/");
  });

  it("should renders repository information", async () => {
    const mockRepositoryData = {
      id: 1,
      full_name: "facebook/react",
      description: "The library for web and native user interfaces.",
      stargazers_count: 10,
      forks_count: 5,
      open_issues_count: 3,
      owner: {
        login: "user",
        avatar_url: "https://example.com/avatar.jpg",
      },
    };
    axiosMock.get.mockResolvedValue({ data: mockRepositoryData });

    renderComponentRepository(["/repositories/facebook/react"]);

    await waitFor(() => {
      const repoInfoTitle = screen.getByText("facebook/react");
      expect(repoInfoTitle).toBeInTheDocument();
      const repoInfoDescription = screen.getByText(
        "The library for web and native user interfaces."
      );
      expect(repoInfoDescription).toBeInTheDocument();
    });
  });

  it("should Simulate an API response to issues", async () => {
    const mockIssuesData = [
      {
        id: 1,
        title: "Add initial canary changelog",
        html_url: "https://github.com/facebook/react/pull/27504",
        user: {
          login: "mattcarrollcode",
        },
      },
      {
        id: 2,
        title:
          "Bug: Hydration fails with statically rendered html when wrapping component in <Suspense>",
        html_url: "https://github.com/facebook/react/issues/27503",
        user: {
          login: "maxbaun",
        },
      },
    ];
    axiosMock.get.mockResolvedValue({ data: mockIssuesData });

    renderComponentRepository(["/repositories/facebook/react"]);
  });
});
