/*
Author: Christopher Gregg
Purpose: This file generates the the welcoming message
*/ 
import classes from './FoodSummary.module.css';
const FoodSummary = () => {
     
    return <section className={classes.summary}>
    <h2>Your food all in one place</h2>
    <p>
        Manage your inventory of food
    </p>
    </section>
    
};
export default FoodSummary;