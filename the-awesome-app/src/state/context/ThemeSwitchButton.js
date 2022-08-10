import { useContext } from "react";
import { AppThemeContext } from "./AppThemeContext";

function ThemeSwitchButton(){

    const theme=useContext(AppThemeContext);
    function switchTheme () {
        //change theme when using appthemeproviderwithreducer(usereducer)
        theme.dispatch({
            type:"SWITCH_THEME"
        });
        //theme.switchTheme();
    }

    return <button className="btn btn-warning" onClick={switchTheme}>Switch Theme</button>
}
export default ThemeSwitchButton;