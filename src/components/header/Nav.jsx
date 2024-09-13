import { NavLink } from "react-router-dom";
import Home from "../header/Nav";

const Nav = () => {
   
    return ( 
        <NavLink to='/'>{Home}</NavLink>
        
     );
}
 
export default Nav;