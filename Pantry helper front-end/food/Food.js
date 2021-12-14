/*
Author: Christopher Gregg
Purpose: a file to call upon the main items related to the food on the mainpage
*/ 
import FoodSummary from "./FoodSumary";
import AvailableFood from "./AvailableFood";
import {Fragment} from 'react'

const Food = () => {
    return <Fragment>
        <FoodSummary />
        <AvailableFood />
    </Fragment>
};
export default Food;
