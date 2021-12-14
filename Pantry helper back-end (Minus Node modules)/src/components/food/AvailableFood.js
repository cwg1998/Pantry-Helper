/*
Author: Christopher Gregg
Purpose: This file generates the table where the food items are displayed, also handles the fetches regarding the food items
*/ 
import React, { Component } from "react";
import classes from './Table.module.css';

class AvailableFood extends Component {

    constructor(props) {
        super(props);
        this.state = { food: null, input:'1' }
        FetchFood();

    }
    userInpChangeHandler = event => {
        this.setState({input: event.target.value});
    };
    async componentDidMount() {
        const fetchedFood = await FetchFood();

        console.log(fetchedFood);
        this.setState({ food: fetchedFood });
        console.log(this.state.food);

    }
    removeFood = (foodItemId) => {
        console.log(' removeFood(): ' + foodItemId, this.state.input);

        const requestOptions = {
            crossDomain: true,
            method: 'POST', 
        //    mode: 'no-cors', 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin,Accept,Content-Type',
                'Accept': 'application/json', 
                'Content-Type': 'application/json' },
            body: JSON.stringify({itemID: foodItemId, qty: this.state.input})
        };
        console.log(requestOptions);
        
        fetch('http://localhost:8000/eat', requestOptions)
            .then(response => console.log(response))
            window.location.reload();

        
    }
    AddFood = (foodItemId) => {
    
        console.log(' addFood(): ' + foodItemId, this.state.input);

        const requestOptions = {
            crossDomain: true,
            method: 'POST', 
        //    mode: 'no-cors', 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin,Accept,Content-Type',
                'Accept': 'application/json', 
                'Content-Type': 'application/json' },
            body: JSON.stringify({itemID: foodItemId, qty: this.state.input})
        };
        console.log(requestOptions);

        fetch('http://localhost:8000/buy', requestOptions)
            .then(response => console.log(response))
        window.location.reload();
    }
    
    render() {
        let element = "";
        if(this.state.food){
            element = this.state.food.map(foodList => 
                <tr key={foodList.id}>
                    <td>{foodList.item}</td>
                    <td>{foodList.quantity}</td>
                    <td>{foodList.id}</td>
                    <td>{foodList.expDate}</td>
                    <td>
                        <input type="text" onChange={this.userInpChangeHandler}></input>
                        <button onClick={() => this.AddFood(foodList.id)}>Add</button>
                        <button onClick={() => this.removeFood(foodList.id)}>Consume</button>
                    </td>
                </tr>);
                
        }
        const item = this.state.food ? this.state.food[0].item : 'test';
      
        console.log(item);
        return (<section>
            <br/>
            <table className={classes.table}>
                <thead>
                <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Item Id</th>
                <th>Expiration Date</th>
                </tr>
                </thead>
                <tbody>
                {element}
                </tbody>
            </table>
        </section>)
    }
}
const FetchFood = async () => {
    return await fetch('http://localhost:8000').then(response => {
        return response.json();
    }).then(data => {

        const foodItems = data.map(foodData => {
            return {
                item: foodData.item,
                quantity: foodData.quantity,
                id: foodData.item_id,
                expDate: foodData.exp_Date

            };
        });
        console.log(foodItems);
        return foodItems;
    });
}

export default AvailableFood;