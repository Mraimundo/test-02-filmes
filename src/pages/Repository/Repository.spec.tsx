import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Repository } from ".";

describe("Repository", () => {
  it("should render correctly", () => {
    render(
      <BrowserRouter>
        <Repository />
      </BrowserRouter>
    );

    screen.debug();
  });
});
