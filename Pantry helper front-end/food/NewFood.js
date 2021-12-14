/*
Author: Christopher Gregg
Purpose: This file handles the modal popup that allows a user to enter a new item to pass into the database, also handles the 
         fetch to send the data
*/ 
import { Component } from 'react';
import Modal from '../UI/Modal';
import classes from '../recipies/Recipes.module.css';

class NewFood extends Component {
    constructor(props) {
        super(props);
        this.state = { item: 'default', qty: '0', id: '0', expDate: '2222-10-10' }
        

    }
    userInpItemChangeHandler = event => {
        this.setState({item: event.target.value});
    };
    userInpQTYChangeHandler = event => {
        this.setState({qty: event.target.value});
    };
    userInpIDChangeHandler = event => {
        this.setState({id: event.target.value});
    };
    userInpExpChangeHandler = event => {
        this.setState({expDate: event.target.value});
    };

    AddNewFood = () => {
    
        console.log(' addNewFood(): ' + this.state.item, this.state.qty, this.state.id, this.state.expDate);

        const requestOptions = {
            crossDomain: true,
            method: 'POST', 
        //    mode: 'no-cors', 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin,Accept,Content-Type',
                'Accept': 'application/json', 
                'Content-Type': 'application/json' },
            body: JSON.stringify({item: this.state.item, qty: this.state.qty, itemID: this.state.id, expDate: this.state.expDate})
        };
        console.log(requestOptions);

        fetch('http://localhost:8000/new', requestOptions)
            .then(response => console.log(response))
            window.location.reload();
    }

    render() {
        
        return (<Modal>
            <button className ={classes['button--alt']} onClick={this.props.onClose}>Close</button>
            <button className ={classes.button} onClick={this.AddNewFood}>Add</button>
            <form>
                <input type="text" id="item" onChange={this.userInpItemChangeHandler}></input><label for="item">Food Item</label>
                <br /><input type="text" id="qty" onChange={this.userInpQTYChangeHandler}></input><label for="qty">Quantity</label>
                <br /><input type="text" id="id" onChange={this.userInpIDChangeHandler}></input><label for="id">Item ID</label>
                <br /><input type="date" id="date" onChange={this.userInpExpChangeHandler}></input><label for="date">Expiration Date</label>
            </form>
        </Modal>)
    }
}
export default NewFood;