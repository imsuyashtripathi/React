import { useReducer } from "react";
import { AppThemeContext } from "./AppThemeContext";

const initState={
    mode:"dark"
}
const reducer =(currentState,action)=>{
    //return the update state
    if(action.type==="SWITCH_THEME"){
        const mode= currentState.mode==="dark"?"light":"dark";
        return{
            mode
        };
    }
    return currentState;
}
function AppThemeProviderWithReducer(props){

    const [state,dispatch]=useReducer(reducer,initState);

    return(
        <>
            <AppThemeContext.Provider value={{mode:state.mode,dispatch}}>
                {props.children}
            </AppThemeContext.Provider>
        </>
    )
}
export default AppThemeProviderWithReducer;