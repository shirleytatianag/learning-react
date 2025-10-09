import {describe, expect, test} from "vitest";
import {add, divide, multiply, subtract} from "./math.helper.ts";

describe("add", () => {
  test("should add two positives numbers", async () => {
    // ! 1. Arrange
    const a = 1;
    const b = 1;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  })

  test("should add two negatives numbers", async () => {
    // ! 1. Arrange
    const a = -5;
    const b = -8;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  })
})

describe("subtract", () => {
  test("should subtract two positives numbers", async () => {
    // ! 1. Arrange
    const a = 5;
    const b = 1;
    // ! 2. Act
    const result = subtract(a, b);
    // ! 3. Assert
    expect(result).toBe(a - b);
  })

  test("should subtract two negative numbers", async () => {
    // ! 1. Arrange
    const a = -6;
    const b = -6;
    // ! 2. Act
    const result = subtract(a, b);
    // ! 3. Assert
    expect(result).toBe(a - b);
  })
})

describe("multiply", () => {
  test("should multiply two positives numbers", async () => {
    // ! 1. Arrange
    const a = 5;
    const b = 1;
    // ! 2. Act
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(a * b);
  })

  test("should multiply two negative numbers", async () => {
    // ! 1. Arrange
    const a = -4;
    const b = -2;
    // ! 2. Act
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(a * b);
  })
})

describe("divide", () => {
  test("should multiply two positives numbers", async () => {
    // ! 1. Arrange
    const a = 2;
    const b = 6;
    // ! 2. Act
    const result = divide(a, b);
    // ! 3. Assert
    expect(result).toBe(a / b);
  })


})


