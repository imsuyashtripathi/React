import Counter from '../components/Counter';
import {render, screen, fireEvent} from '@testing-library/react';


test("should render Counter", () => {

    render(<Counter initCount={10}/>);
    expect(screen.getByText("Counter: 10")).toBeTruthy();

})

test("should increment Counter", () => {

    render(<Counter initCount={10}/>);
    expect(screen.getByText("Counter: 10")).toBeTruthy();
    fireEvent.click(screen.getByText("Inc"), {});
    expect(screen.getByText("Counter: 11")).toBeTruthy();

})

test("should change Counter", () => {

    render(<Counter initCount={10}/>);
    expect(screen.getByText("Counter: 10")).toBeTruthy();
    fireEvent.change(screen.getByPlaceholderText("Count"), {target: {value: 25}});
    expect(screen.getByText("Counter: 25")).toBeTruthy();

    fireEvent.change(screen.getByPlaceholderText("Update Count"), {target: {value: 125}});
    expect(screen.getByText("Counter: 25")).toBeTruthy();

    fireEvent.click(screen.getByText("Update"), {});
    expect(screen.getByText("Counter: 125")).toBeTruthy();



})