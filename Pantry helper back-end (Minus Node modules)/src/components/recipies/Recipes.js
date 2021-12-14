/*
Author: Christopher Gregg
Purpose: Generate the modal for the recipes and display them in a table along with boxes to enter data for a new item, handles 
         the fetch to add a new item to the recipes table and to pull the items from the recipes table
*/ 
import { Component } from 'react';
import Modal from '../UI/Modal';
import classes from './Recipes.module.css';
import classes1 from '../food/Table.module.css';


class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { recipe: null, recipes: '', item: '', id: '', qty: '' }
        FetchRecipes();

    }
    userInpRecipeChangeHandler = event => {
        this.setState({recipes: event.target.value});
    };
    userInpItemChangeHandler = event => {
        this.setState({item: event.target.value});
    };
    userInpIDChangeHandler = event => {
        this.setState({id: event.target.value});
    };
    userInpQTYChangeHandler = event => {
        this.setState({qty: event.target.value});
    };
    async componentDidMount() {
        const fetchedRecipes = await FetchRecipes();

        console.log(fetchedRecipes);
        this.setState({ recipe: fetchedRecipes });
        console.log(this.state.recipe);

    }
    AddNewRecipe = () => {
    
        console.log(' addNewRecipe(): ' + this.state.recipes, this.state.item, this.state.id, this.state.qty);

        const requestOptions = {
            crossDomain: true,
            method: 'POST', 
        //    mode: 'no-cors', 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin,Accept,Content-Type',
                'Accept': 'application/json', 
                'Content-Type': 'application/json' },
            body: JSON.stringify({recipe: this.state.recipes, item: this.state.item, itemID: this.state.id, qty: this.state.qty})
        };
        console.log(requestOptions);

        fetch('http://localhost:8000/addrecipe', requestOptions)
            .then(response => console.log(response))
            window.location.reload();
    }
    render() {
        let element = (<br></br>)
        if(this.state.recipe){
            element = this.state.recipe.map((recipeList => 
                <tr><td>{recipeList.recipe}</td>
                <td>{recipeList.item}</td>
                <td>{recipeList.id}</td>
                <td>{recipeList.qty}</td></tr>));
        }
        const item = this.state.recipe ? this.state.recipe[0].item : 'test';
      
        console.log(item);
        return (<Modal>
            <button className ={classes['button--alt']} onClick={this.props.onClose}>Close</button>
            <button className ={classes.button} onClick={() => this.AddNewRecipe()}>Add</button>
            <br /><input type="text" id="Recipe" onChange={this.userInpRecipeChangeHandler}></input><label for="item">Recipe</label>
                <br /><input type="text" id="Item" onChange={this.userInpItemChangeHandler}></input><label for="qty">Item ID</label>
                <br /><input type="text" id="RecipeID" onChange={this.userInpIDChangeHandler}></input><label for="id">Recipe ID</label>
                <br /><input type="text" id="qty" onChange={this.userInpQTYChangeHandler}></input><label for="date">Quantity Needed</label>
            <table className ={classes1.table}>
                <th>Recipes</th>
                <th>item;</th>
                <th>Id</th>
                <th># needed</th>
                {element}
            </table>
        </Modal>)
    }
}

const FetchRecipes = async () => {
    return await fetch('http://localhost:8000/recipes').then(response => {
        return response.json();
    }).then(data => {

        const recipeItems = data.map(recipeData => {
            return {
                recipe: recipeData.recipie,
                item: recipeData.item,
                id: recipeData.recipie_id,
                qty: recipeData.quantity

            };
        });
        console.log(recipeItems);
        return recipeItems;
    });
}

export default Recipes;