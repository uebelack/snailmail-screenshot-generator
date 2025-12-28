import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OverviewPage from "./OverviewPage";

it("should render", () => {
  render(
    <MemoryRouter>
      <OverviewPage />
    </MemoryRouter>
  );
});
