import React, { useState } from "react";
import classes from "./ExpenseForm.module.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.new_expense_controls}>
        <div className={classes.new_expense_control}>
          <label htmlFor="title">Title</label>
          <input
            value={enteredTitle}
            type="text"
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.new_expense_control}>
          <label htmlFor="amount">Amount</label>
          <input
            value={enteredAmount}
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className={classes.new_expense_control}>
          <label htmlFor="date">Date</label>
          <input
            value={enteredDate}
            type="date"
            id="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes.new_expense_actions}>
        <button type="button" onClick={props.onCancel}></button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
