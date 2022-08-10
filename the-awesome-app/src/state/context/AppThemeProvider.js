import { useState } from "react";
import { AppThemeContext } from "./AppThemeContext";
function AppThemeProvider(props){
    
    const switchTheme=()=>{
        setState((prevState) => {
            //return the new State
            const mode = prevState.mode === "dark" ? "light" : "dark";
            return {
                mode,
                switchTheme
            }
        });
    }
    const [state,setState]=useState({
        mode:"dark",
        switchTheme
    });
    return(
        <>
            <AppThemeContext.Provider value={state}>
                {props.children}
            </AppThemeContext.Provider>
        </>
    )
}
export default AppThemeProvider;