import {Link} from "react-router-dom";
import {appRoutes} from "../routes/routes";
import React, { useContext } from "react";
import { AppThemeContext } from "../state/context/AppThemeContext";
import ThemeSwitchButton from "../state/context/ThemeSwitchButton";
function Header(){


    const theme=useContext(AppThemeContext);
    const mode=theme.mode;

    return(
        // <Fragment> or <> both are same
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React Training</a>
                    <ul className="nav justify-content-center">
                        {appRoutes.filter(item=>item.isMenuItem).map((item,index)=>{
                            return(
                                <li key={item.path} className="nav-item">
                                    <Link className="nav-link" to={item.path}>{item.title}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <ThemeSwitchButton/>
                        </li>
                    
                        
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default React.memo(Header);