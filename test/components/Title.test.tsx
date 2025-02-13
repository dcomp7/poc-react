import React from "react";
import { it, expect, describe, beforeAll } from "vitest"
import { render, screen } from "@testing-library/react";


import Title from "../../src/components/Title";
import "@testing-library/jest-dom/vitest";

beforeAll(() => {
  render(<Title />);
});

describe("Title", () => {
  it("checks if title is rendered", () => {
    screen.debug();
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  it("checks if 'Validador de CPF' appears", () => {
    //screen.debug();
    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("Validador de CPF");
  });
});
