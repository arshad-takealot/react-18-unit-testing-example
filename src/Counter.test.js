import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial value", () => {
        const { getByTestId } = render(<Counter initialCount={5} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(5);
    });     
    it("count should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementBtn = getByRole("button", {name: "Increment"});
        const countValueBefore = Number(getByTestId("count").textContent);
        fireEvent.click(incrementBtn);
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueBefore).toEqual(0);
        expect(countValueAfter).toEqual(1);
    }); 
    it("count should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
        const decrementBtn = getByRole("button", {name: "Decrement"});
        const countValueBefore = Number(getByTestId("count").textContent);
        fireEvent.click(decrementBtn);
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueBefore).toEqual(1);
        expect(countValueAfter).toEqual(0);
    });
    it("count should reset to 0 after the restart button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={100} />);
        const resetBtn = getByRole("button", {name: "Restart"});
        const countValueBefore = Number(getByTestId("count").textContent);
        fireEvent.click(resetBtn);
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueBefore).toEqual(100);
        expect(countValueAfter).toEqual(0);
    });
    it("count should change signs after switch signs button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={100} />);
        const switchBtn = getByRole("button", {name: "Switch Signs"});
        const countValueBefore = Number(getByTestId("count").textContent);
        fireEvent.click(switchBtn);
        const countValueAfter = Number(getByTestId("count").textContent);
        expect(countValueBefore).toEqual(100);
        expect(countValueAfter).toEqual(-100);
    });
})