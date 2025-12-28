import { render } from "@testing-library/react";
import { vi } from "vitest";
import DevicePage from "./DevicePage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({ deviceKey: "iphone67" }),
}));

it("should render", () => {
  render(<DevicePage />);
});
