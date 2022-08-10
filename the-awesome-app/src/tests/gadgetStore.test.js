import GadgetStore from '../components/GadgetStore';
import {render, screen, fireEvent, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import {store} from '../state/redux/store';
import {Provider} from 'react-redux';
import * as reactredux from 'react-redux';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

test("GadgetStore", () => {

    


    reactredux.useSelector.mockImplementation(() => {
        return [{id: 1, name: "p1", price: 1000, decription: ""}, 
        {id: 2, name: "p2", price: 2000, decription: ""}]
    })

    reactredux.useDispatch.mockImplementation(() => {
        return () => {}
    })

    render(<Provider store={store}><GadgetStore/></Provider>)
    expect(screen.getByText("Gadgets")).toBeTruthy();

    expect(screen.getAllByTestId("gadget")).toHaveLength(2);
     const allBtns = screen.getAllByText("Add To Cart");
    fireEvent.click(allBtns[0])
    expect(reactredux.useDispatch).toBeCalledTimes(1);
})