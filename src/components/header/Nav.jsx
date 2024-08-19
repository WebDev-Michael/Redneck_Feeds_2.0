import { NavLink } from "react-router-dom";
import { useFetchData } from "../hooks";

const Nav = () => {
   const { data: categories, error } = useFetchData("Url goes here, or make a .env file and put the new variable here");

   if(error) return <p>Error: { error } </p>;

    return ( 
        <NavLink to='/'>Home</NavLink>

     );
}
 
export default Nav;