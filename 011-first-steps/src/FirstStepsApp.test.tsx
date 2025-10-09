import {afterEach, describe, expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {FirstStepsApp} from "./FisrtStepsApp.tsx";

const mockItemCounter = vi.fn(({name, quantity}: { name: string; quantity: number }) => {
  return (
    <div data-testid="item-counter-mock">
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
})

vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
  ItemCounter: (props: { name: string; quantity: number }) => mockItemCounter(props)
}))

// vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
//   ItemCounter: ({name, quantity}: { name: string; quantity: number }) => {
//     return (
//       <div data-testid="item-counter-mock">
//         <span>{name}</span>
//         <span>{quantity}</span>
//       </div>
//     );
//   }
// }))

describe("FirstStepsApp", () => {
    afterEach(() => {
      vi.clearAllMocks()
    })

    test("should match snapshot", () => {
      const {container} = render(<FirstStepsApp/>);
      expect(container).toMatchSnapshot();
    })

    test("should render the correct number of ItemCounter components", () => {
      render(<FirstStepsApp/>);
      const itemCounters = screen.getAllByTestId("item-counter-mock");
      expect(itemCounters.length).toBe(3);
    })

    test("should render the correct number of ItemCounter components", () => {

      render(<FirstStepsApp/>);
      expect(mockItemCounter).toHaveBeenCalledTimes(3);
      expect(mockItemCounter).toHaveBeenCalledWith({name: 'Nintendo Switch 2', quantity: 1});
      expect(mockItemCounter).toHaveBeenCalledWith({name: 'Pro Controller', quantity: 2});
      expect(mockItemCounter).toHaveBeenCalledWith({name: 'Super Smash', quantity: 5});
      screen.debug()
    })
  }
);