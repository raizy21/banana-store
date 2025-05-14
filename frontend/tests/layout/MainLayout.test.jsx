import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

/* -----------------------------------------------------------
   1. mock Navbar and Footer to simple placeholders
----------------------------------------------------------- */
vi.mock("../../../src/components/Navbar", () => ({
  default: () => <div data-testid="navbar">navbar</div>,
}));
vi.mock("../../../src/components/Footer", () => ({
  default: () => <div data-testid="footer">footer</div>,
}));

/* -----------------------------------------------------------
   2. import the layout AFTER mocks are registered
----------------------------------------------------------- */
import MainLayout from "../../../src/layouts/MainLayout.jsx";

describe("MainLayout", () => {
  it("renders navbar, outlet content, and footer in correct order", () => {
    /* dummy element to act as child route content */
    const TestPage = () => <h1 data-testid="page">page content</h1>;

    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<TestPage />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );

    /* assertions */
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("page")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    /* ensure the order in the DOM is navbar → page → footer */
    const children = screen.getByTestId("navbar").parentElement.children;
    expect(children[0]).toHaveAttribute("data-testid", "navbar");
    expect(children[1].querySelector('[data-testid="page"]')).toBeTruthy();
    expect(children[2]).toHaveAttribute("data-testid", "footer");
  });
});
