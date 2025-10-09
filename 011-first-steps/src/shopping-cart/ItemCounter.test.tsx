import {describe, expect, test} from "vitest";
import {ItemCounter} from "./ItemCounter.tsx";
import {fireEvent, render, screen} from "@testing-library/react";

describe(ItemCounter, () => {
  test('Should render with default values', () => {
    const name = 'Test item';
    render(<ItemCounter name={name}/>);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();

  })

  test('Should render with custom quantity', () => {
    const name = 'Test item';
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity}/>);
    expect(screen.getByText(quantity)).toBeDefined();
    // expect(screen.getByText(name)).not.toBeNull();

  })

  test('Should increase count when +1 button is pressed', () => {
    render(<ItemCounter name={'Test item'} quantity={1}/>);
    const [buttonAdd] = screen.getAllByRole('button');
    fireEvent.click(buttonAdd); // Disparar el evento click realmente
    console.log(buttonAdd.innerHTML);

    expect(screen.getByText('2')).toBeDefined();

  })


  test('Should increase count when -1 button is pressed', () => {
    render(<ItemCounter name={'Test item'} quantity={5}/>);
    const [, buttonSubtract] = screen.getAllByRole('button');
    fireEvent.click(buttonSubtract); // Disparar el evento click realmente
    console.log(buttonSubtract.innerHTML);

    expect(screen.getByText('4')).toBeDefined();

  })

  test('Should increase count when -1 button is pressed', () => {
    render(<ItemCounter name={'Test item'} quantity={1}/>);
    const [, buttonSubtract] = screen.getAllByRole('button');
    fireEvent.click(buttonSubtract); // Disparar el evento click realmente
    console.log(buttonSubtract.innerHTML);

    expect(screen.getByText('1')).toBeDefined();

  })

  test('Should change to red  when count is 1', () => {
    const name = 'Test item';
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity}/>);

    const itemText = screen.getByText(name);
    console.log();
    expect(itemText.style.color).toBe('red');
  })

  test('Should change to black  when count is greater than 1', () => {
    const name = 'Test item';
    const quantity = 3;
    render(<ItemCounter name={name} quantity={quantity}/>);

    const itemText = screen.getByText(name);
    console.log();
    expect(itemText.style.color).toBe('black');
  })
})