import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 2,
  meat: 3,
  bacon: 2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad : 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false
  }

  purchaseHandler = () => { this.setState({ purchasing: true }) }

  purchaseCanceledHandler = () => { this.setState({ purchasing: false }) }

  purchaseContinuedHandler = () => { alert('You continued!') }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0)
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = this.state.ingredients[type] + 1
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({ totalPrice: newPrice, ingredients: ingredients });
    this.updatePurchaseState(ingredients);
  }

  removeIngredientHandler = (type) => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = this.state.ingredients[type] - 1
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({ totalPrice: newPrice, ingredients: ingredients });
    this.updatePurchaseState(ingredients);
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
	<Modal
	  show={this.state.purchasing}
	  modalClosed={this.purchaseCanceledHandler}>
	  <OrderSummary
	    price={this.state.totalPrice}
	    continued={this.purchaseContinuedHandler}
	    canceled={this.purchaseCanceledHandler}
	    ingredients={this.state.ingredients} />
	</Modal>
	<Burger ingredients={this.state.ingredients} />
	<BuildControls
	  ordered={this.purchaseHandler}
	  purchasable={this.state.purchasable}
	  price={this.state.totalPrice}
	  disabled={disabledInfo}
	  ingredientAdded={this.addIngredientHandler}
	  ingredientRemoved={this.removeIngredientHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
