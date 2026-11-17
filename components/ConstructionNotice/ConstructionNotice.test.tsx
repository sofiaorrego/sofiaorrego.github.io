import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import ConstructionNotice from "./index";

afterEach(cleanup);

it("muestra el estado del portafolio como un encabezado accesible", () => {
  render(<ConstructionNotice />);

  const heading = screen.getByRole("heading", { level: 2, name: "Portafolio en construcción" });
  const notice = screen.getByRole("region", { name: "Portafolio en construcción" });
  expect(notice.contains(heading)).toBe(true);
});
