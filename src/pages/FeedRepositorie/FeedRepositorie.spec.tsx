import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { FeedRepositorie } from ".";

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
  });
});
