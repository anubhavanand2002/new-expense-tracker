import React from "react";
import "./Card.css";

const Card = (props) => {
  // const classes = "card " + props.className;
  
  // console.log(props);

  return <div className ={props.className + " card"}>{props.children}</div>;
};

export default Card;
