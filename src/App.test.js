import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Celine Lum's portfolio", () => {
    render(<App />);

    expect(
        screen.getByRole("heading", { name: "Celine Lum", level: 1 })
    ).toBeInTheDocument();
});
