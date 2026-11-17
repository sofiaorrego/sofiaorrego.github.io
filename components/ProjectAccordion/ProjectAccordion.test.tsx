import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import ProjectAccordion from "./index";

afterEach(cleanup);

it("abre y cierra los detalles a través de un botón accesible", () => {
  const projects = [{
    id: "example",
    title: "Proyecto de prueba",
    description: "Descripción de prueba",
    url: "https://example.com/",
  }];

  render(<ProjectAccordion projects={projects} />);

  const toggle = screen.getByRole("button", { name: "Proyecto de prueba" });
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  fireEvent.click(toggle);
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  expect(screen.getByRole("link", { name: "Ver proyecto" }).getAttribute("href")).toBe("https://example.com/");
  fireEvent.click(toggle);
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
});
