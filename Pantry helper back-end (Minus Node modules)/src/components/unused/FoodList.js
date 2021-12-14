import React from 'react';

import Food from '../food/Food';
import classes from './FoodList.module.css';

const FoodList = (props) => {
  return (
    <ul className={classes['food-list']}>
      {props.food.map((food) => (
        <Food
          item={food.item}
          qty={food.quantity}
          Id={food.item_id}
          expirationDate={food.exp_date}
        />
      ))}
    </ul>
  );
};

export default FoodList;