import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("renders the label", () => {
    render(<Button>Open Zirndorf</Button>);

    expect(
      screen.getByRole("button", { name: "Open Zirndorf" }),
    ).toBeInTheDocument();
  });
});
