import { useRef, useState ,useCallback} from "react";
import Input from './Input';
function Register(){

    const nameInputRef=useRef(null);
    const emailInputRef=useRef(null);
    const [email,setEmail]=useState("");

    function register(){
        const isNameValid=nameInputRef.current.input.value;
        const isEmailvalid=emailInputRef.current.input.value;
        if(isEmailvalid && isNameValid){

        }

    }
    const changeName=useCallback((event)=>{
        console.log("Name Update "+event.target.value );
    },[])
    const changeEmail=useCallback((event)=>{
        console.log("Name Update "+event.target.value );
        setEmail(event.target.value);
    },[email])

    return (
        <form>
        <div>
            <h3>Register</h3>
            {/* <div className="form-group">
                <label>Name</label>
                <input className="form-control" type="text" placeholder="Name" ref={nameInputRef}/>
            </div> */}
            <Input type="text" placeholder="Name" label="Name" ref={nameInputRef} onChange={changeName}/>
            {/* <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" placeholder="Email" onChange={changeEmail} ref={emailInputRef}/>
            </div> */}
            <Input type="text" placeholder="Email" label="Email" ref={emailInputRef} onChange={changeEmail}/>
            <br/>
            <div>
                <button type="button" className="btn btn-info" onClick={register}>Register</button>
            </div>
        </div>
        </form>

    )
}
export default Register;