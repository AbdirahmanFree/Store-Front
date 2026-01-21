import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import classes from "./Home.module.css"
function Home(){
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.navbar}`}>
                <Navbar  />
            </div>
            
            <div className={`${classes.content}`}>
                <Hero/>

            </div>
        </div>
    )
}
export default Home