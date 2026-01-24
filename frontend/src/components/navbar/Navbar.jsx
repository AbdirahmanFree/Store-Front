import { Link } from "react-router";
import classes from "./Navbar.module.css"
import { useState } from "react";
function Navbar(){
    const [home, setHome] = useState(true)
    return (
        <div className={`${classes.container}`}>
            <Link to="/" >Home</Link>
            <Link to="/shop" >Shop</Link>
            <Link to="/about">About us</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}
export default Navbar