// tests/layout/MainLayout.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { vi, it, expect } from "vitest";

/* mock the real Navbar / Footer that MainLayout imports
   src/layouts/MainLayout.jsx does:  import Navbar from "../components/Navbar";
   so the resolved path is           src/components/Navbar                */
vi.mock("../../src/components/Navbar", () => ({
  default: () => <div>navbar</div>, // simple stub
}));
vi.mock("../../src/components/Footer", () => ({
  default: () => <div>footer</div>,
}));

/* now we can import the file under test */
import MainLayout from "../../src/layouts/MainLayout.jsx";

/* dummy page component to render inside <Outlet /> */
const Page = () => <h1>page content</h1>;

it("renders navbar, page content, and footer", () => {
  render(
    <ChakraProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Page />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ChakraProvider>
  );

  /* assertions by visible text */
  expect(screen.getByText("navbar")).toBeInTheDocument();
  expect(screen.getByText("page content")).toBeInTheDocument();
  expect(screen.getByText("footer")).toBeInTheDocument();
});
