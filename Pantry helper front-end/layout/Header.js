/*
Author: Christopher Gregg
Purpose: This file generates all of the items within the header, including the buttons, passing through a state to 
         pop up the modals when necessary
*/ 
import React,  {Fragment} from 'react';
import pantryImage from '../../assets/Pantry.jpg';
import classes from './Header.module.css';
import classes1 from './HeaderButton.module.css'

const Header = props =>{  
    return <Fragment>
        <header className={classes.header}>
            <h1>PantryHelper</h1>
            <button className={classes1.button} onClick={props.onShowNew}>Add New Item</button>
            <button className={classes1.button} onClick={props.onShowRecipes}>Recipies</button>
            <button className={classes1.button} onClick={props.onShowLow}>LowStock</button>
            
        </header>
        <div className={classes['main-image']}>
            <img src={pantryImage} alt='A nicely organized pantry'/>
        </div>
        </Fragment>
};
export default Header;