import ListProducts from '../components/ListProducts';
import {render, screen, fireEvent, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../state/redux/store';
import axios from 'axios';

jest.mock("axios");
jest.spyOn(window, "alert").mockImplementation(() => {});

it("ListProducts", async() => {

    axios.get.mockResolvedValueOnce( {data: [
        {id:1, name: "P1", description: "D1", price: 1000},
        {id:2, name: "P2", description: "D2", price: 2000},
    ]})


    axios.delete.mockResolvedValueOnce({status: 200});

    render(<Provider store={store}><ListProducts/></Provider>);
    expect(screen.getByText("List Products")).toBeTruthy();

    await waitFor(() => screen.getAllByTestId("product"));

    let allProducts = screen.getAllByTestId("product");
    expect(allProducts).toHaveLength(2);

    const allDeleteBtns = screen.getAllByText("Delete");
    await fireEvent.click(allDeleteBtns[0], {});

    await waitForElementToBeRemoved(allProducts[0]);
    allProducts = screen.getAllByTestId("product");
    expect(allProducts).toHaveLength(1);





})
