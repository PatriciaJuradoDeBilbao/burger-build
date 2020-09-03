import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Make your burger</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Sign in | Sign up </NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
)

export default navigationItems