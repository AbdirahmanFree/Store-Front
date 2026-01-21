import heroNature from '../../assets/heroNature.webp'
import classes from './Hero.module.css'
import { Link } from 'react-router'
function Hero(){
    return (
    <div className={`${classes.container}`}>
        <div className={`${classes.heroImg}`}>
            <img src={heroNature}/>
        </div>
        <div className={`${classes.heroText}`}>
            <h1>Where every adventure starts</h1>
            <Link to='shop'>Shop Now</Link>
        </div>
        
    </div>
    )
}
export default Hero