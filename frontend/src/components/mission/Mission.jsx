import classes from './Mission.module.css'
function Mission(){
    return (
        <div className={`${classes.container}`}>
            <h1>Our Mission</h1>
            <div className={`${classes.textContainer}`}>
                <span>Our mission is to empower adventurers, creators, and everyday
                    explorers by providing a carefully curated selection of 
                    adventure gear, apparel, and electronics that combine durability, innovation, and value. 
                    We strive to support every journey—whether off the grid or close to home—by delivering products people can
                    trust, inspiring confidence, and making exploration accessible to all.</span>
            </div>
        </div>
    )
}

export default Mission