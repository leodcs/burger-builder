import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;
    const ingredientClass = classes[this.props.type];

    if (this.props.type === 'bread-top') {
      ingredient = (
	<div className={classes['bread-top']}>
	  <div className={classes.seeds1}></div>
	  <div className={classes.seeds2}></div>
	</div>
      );
    } else if (ingredientClass) {
      ingredient = <div className={ingredientClass}></div>;
    }

    return ingredient;
  }

};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
