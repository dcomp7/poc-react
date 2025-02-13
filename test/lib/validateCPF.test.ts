import React from "react";
import { it, expect, describe, beforeAll } from "vitest"
import { render, screen } from "@testing-library/react";


import validateCPF from "../../src/lib/validateCPF.ts";
import "@testing-library/jest-dom/vitest";

describe("checks if the validateCPF function is working", () => {
  const validCPFs = [
    "52998224725",
    "12345678909",
    "11144477735",
    "98765432100",
    "84730021800"
  ];

  const invalidCPFs = [
    "00000000000",
    "33317501720",
    "33311501721",
    "12345678910"
  ];

  it("checks if valid cpfs are true", () => {
    validCPFs.forEach(cpf => {
      expect(validateCPF(cpf)).toBe(true);
    });
  });

  it("checks if invalid cpfs are false", () => {
    invalidCPFs.forEach(cpf => {
      expect(validateCPF(cpf)).toBe(false);
    });
  });


});
