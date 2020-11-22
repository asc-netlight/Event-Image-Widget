import { render, screen } from "@testing-library/react";

import EventImageComponent from "./EventImageComponent";

describe("Clicker render", () => {
  it("renders without crashing", () => {
    render(<EventImageComponent />);
    expect(screen.getByText("Loading.."))
  });
});
