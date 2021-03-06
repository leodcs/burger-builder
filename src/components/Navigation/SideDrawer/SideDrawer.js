import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Closed]

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Opened]
  }

  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
	<Logo height="11%" />
	<nav>
	  <NavigationItems />
	</nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
