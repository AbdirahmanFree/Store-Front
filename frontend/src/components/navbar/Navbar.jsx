import { Link } from "react-router";
import classes from "./Navbar.module.css"
function Navbar(){
    return (
        <div className={`${classes.container}`}>
            <Link to="/">Home</Link>
            <Link to="shop" >Shop</Link>
            <Link to="about">About us</Link>
        </div>
    )
}
export default Navbar