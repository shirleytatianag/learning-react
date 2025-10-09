import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {MyAwesomeApp} from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName ans lastName', () => {
    // const {container} = render(<MyAwesomeApp/>); // ideal para estado inicial, no actualiza eventos, estadp sin manipulaciones con eventos


    // const h1 = container.querySelector('h1');
    // console.log(h1?.innerHTML);
    // expect(h1?.innerHTML).toContain('Fernando'); //Que contenga es palabra, es comoun icnludes, así que cuidado
    //
    // const h3 = container.querySelector('h3');
    // console.log(h3?.innerHTML);
    // expect(h3?.innerHTML).toContain('Herrera'); //Que contenga es palabra, es comoun icnludes, así que cuidado
  })

  test('should render firstName and lastName, screen', () => {
    render(<MyAwesomeApp/>); // ideal para estado inicial, no actualiza eventos
    screen.debug()


    expect(screen.getByText('Fernando')).toBeTruthy();
    expect(screen.getByText('Herrera')).toBeTruthy();

  })

  test('should match snapshot', () => {
    const {container} = render(<MyAwesomeApp/>);
    expect(container).toMatchSnapshot();
  })

  test('should match snapshot', () => {
    render(<MyAwesomeApp/>);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  })
})