/*
Author: Christopher Gregg
Purpose: This file generates the modal that displays the items that are low quantityand handles the corresponding fetch
*/ 
import { Component } from 'react';
import Modal from '../UI/Modal';
import classes from './Recipes.module.css';
import classes1 from '../food/Table.module.css';

class LowQuantity extends Component {
    constructor(props) {
        super(props);
        this.state = { lowItems: null }
        

    }
    async componentDidMount() {
        const fetchedFood = await FetchLow();

        console.log(fetchedFood);
        this.setState({ lowItems: fetchedFood });
        console.log(this.state.lowItems);

    }

    render() {
    let element = (<br></br>)
    if(this.state.lowItems){
        element = this.state.lowItems.map((foodList => 
            <tr><td>{foodList.item}</td>
            <td>{foodList.qty}</td>
            <td>{foodList.id}</td>
            <td>{foodList.expDate}</td></tr>));
    }
    //const item = this.state.lowItems ? this.state.lowItems[0].item : 'test';
  
    //console.log(item);
    return (<Modal>
        <button className ={classes['button--alt']} onClick={this.props.onClose}>Close</button>
        <table className ={classes1.table}>
            <th>Item</th>
            <th>Quantity</th>
            <th>Id</th>
            <th>Experation</th>
            {element}
        </table>
    </Modal>)
    };
};
const FetchLow = async () => {
    return await fetch('http://localhost:8000/lowQTY').then(response => {
        return response.json();
    }).then(data => {

        const foodItems = data.map(foodData => {
            return {
                item: foodData.item,
                qty: foodData.quantity,
                id: foodData.item_id,
                expDate: foodData.exp_date

            };
        });
        console.log(foodItems);
        return foodItems;
    });
}

export default LowQuantity;