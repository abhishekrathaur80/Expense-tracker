import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  const wrapperClass = classes.card + props.className;
  return <div className={wrapperClass}>{props.children}</div>;
};

export default Card;
