import React from "react";
import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={classes.expense_item}>
        <ExpenseDate date={props.date} />
        <div className={classes.expense_item_description}>
          <h2>{props.title}</h2>
          <div className={classes.expense_item_price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
