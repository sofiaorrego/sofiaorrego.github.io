import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Button from "./index";

afterEach(cleanup);

describe("Button", () => {
  it("activa una acción sin enviar un formulario por defecto", () => {
    const onClick = vi.fn();
    const onSubmit = vi.fn();

    render(<form onSubmit={onSubmit}><Button onClick={onClick}>Guardar</Button></form>);

    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(onClick).toHaveBeenCalledOnce();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("expone el estado deshabilitado y bloquea la acción", () => {
    const onClick = vi.fn();

    render(<Button disabled onClick={onClick}>Guardar</Button>);

    const button = screen.getByRole("button", { name: "Guardar" });
    expect(button.hasAttribute("disabled")).toBe(true);
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
