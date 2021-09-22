import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //this will take classname of Card component imported in ExpenseItem
  return <div className={classes}>{props.children}</div>; // content of <Card>props.children</Card>
}

export default Card;
