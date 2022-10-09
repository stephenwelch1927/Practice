import React from "react";
import classes from './Card.module.css'

//Import modules from css have to import as above classes the the card class
//We are merging two css classes with the template literal notation
const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;