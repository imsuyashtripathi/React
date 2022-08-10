import React, { useContext, useImperativeHandle, useRef } from 'react';
import { AppThemeContext } from '../state/context/AppThemeContext';
// React.Memo=> 16.3 the component will re-render only if the state of props changes 
const Input=React.memo(React.forwardRef((props,ref)=>{

    const theme=useContext(AppThemeContext);
    const mode=theme.mode;
    const inputRef=useRef(null);
    useImperativeHandle(ref,()=>{
        //this object is what the reference to this component will point too
        return{
            info:"Reusable component",
            version:"1.0",
            input:inputRef.current,
            validate:validate
        }
    });
    function validate(){
        const isValid=inputRef.current.checkValidaty();
        return isValid
    }
    const {label,...otherProps}=props;
        return (
        <div>
            <div className={mode ==="dark"?"form-group":"input-group mb-3"}>
                {mode ==="dark"?<label>{label}</label>:null}
                {mode === "light" ? <span className="input-group-text" id="basic-addon1">{label}</span>:null}
                <input className="form-control" {...otherProps} ref={inputRef}/>
            </div>
        </div>
    )
}))
export default Input;