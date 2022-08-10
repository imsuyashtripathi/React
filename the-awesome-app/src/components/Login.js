import { useRef, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Login(){

    const [message, setMessage]= useState("");
    const nameInputRef = useRef(null);
    const pwdInputRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function login(){

        const name = nameInputRef.current.value;
        const password = pwdInputRef.current.value;

        if(name && password){

            setMessage("");
            try {
                
                const url = process.env.REACT_APP_BASE_URL + "/login";
                const response = await axios.post(url, {name, password} );
                setMessage("");
                //sessionStorage.setItem("isAuthenticated", "true");
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated : true,
                        accessToken: response.data.accessToken,
                        refreshToken: response.data.refreshToken,
                        userName:name
                    }
                });

                navigate("/products");

            } catch (error) {

                setMessage("Invalid Credentials");
                //sessionStorage.removeItem("isAuthenticated");
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated : false,
                        accessToken: "",
                        refreshToken: "",
                        userName:""
                    }
                });
            }
        }
        else{
            setMessage("Please enter the credentials");
        }
    }
    return (
        <div>
            <h3>Login</h3>
            
            {message ? <div className="alert alert-warning">{message}</div> : null}

            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="UserName" ref={nameInputRef}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={pwdInputRef}/>
            </div>

            <br/>
            <button className="btn btn-success" onClick={login}>Login</button>
        </div>
    )
}

export default Login;