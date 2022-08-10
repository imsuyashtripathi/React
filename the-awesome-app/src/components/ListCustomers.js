import axios from "axios";
import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
const ListCustomers = () =>{

    const [customers, setCustomers] = useState([]);
    const navigate=useNavigate();
    const location=useLocation();

    useEffect(()=> {

        fetchCustomers();

    }, []);

    async function fetchCustomers(){
        try {
            const url = process.env.REACT_APP_BASE_URL + "/customers";
            const response = await axios.get(url);
            setCustomers(response.data);

        } catch (error) {
            console.log("error ", error);
        }
    }

    function editCustomer(product){
        navigate(location.pathname+"/"+product.id);
    }
    

    return (
        <div>
            <h3>Customers</h3>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => editCustomer(item)}>Edit</button>&nbsp;
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListCustomers;