import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import ProjectCollage from "./index";

afterEach(cleanup);

const featuredProject = {
  id: "umbral",
  title: "Un umbral de hormigón",
  description: "Un ejercicio sobre la transición entre exterior e interior.",
  url: "https://example.com/umbral",
  sample: true,
  cover: { src: "/umbral.jpg", alt: "Dos muros de hormigón enmarcan el paisaje", width: 1500, height: 1000 },
};

const projects = [
  featuredProject,
  {
    id: "maqueta",
    title: "Estudio de maqueta",
    description: "Un proyecto con una ficha de texto.",
  },
];

it("mantiene el orden de los proyectos y abre la ficha de la imagen elegida", async () => {
  render(<ProjectCollage projects={projects} />);

  const triggers = screen.getAllByRole("button");
  expect(triggers.map((trigger) => trigger.textContent?.trim())).toEqual(projects.map(({ title }) => title));
  expect(screen.queryByRole("dialog")).toBeNull();

  fireEvent.click(triggers[0]);
  const dialog = await screen.findByRole("dialog", { name: featuredProject.title });
  expect(within(dialog).getByText("Proyecto de muestra · Imagen generada")).toBeTruthy();
  expect(within(dialog).getByText(featuredProject.description)).toBeTruthy();
  const image = within(dialog).getByRole("img", { name: featuredProject.cover.alt });
  expect(decodeURIComponent(image.getAttribute("src") ?? "")).toContain(featuredProject.cover.src);
  expect(within(dialog).getByRole("link", { name: "Ver proyecto" }).getAttribute("href")).toBe(featuredProject.url);

  fireEvent.click(within(dialog).getByRole("button", { name: "Cerrar ficha" }));
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
});

it("muestra proyectos sin portada ni enlace", async () => {
  render(<ProjectCollage projects={projects.slice(1)} />);
  fireEvent.click(screen.getByRole("button", { name: projects[1].title }));

  const dialog = await screen.findByRole("dialog", { name: projects[1].title });
  expect(within(dialog).getByText(projects[1].description)).toBeTruthy();
  expect(within(dialog).queryByRole("img")).toBeNull();
  expect(within(dialog).queryByRole("link")).toBeNull();
});
