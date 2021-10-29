import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,

    // });
    // setUserInput((prevState)=>{
    //   return({
    //     ...prevState,
    //     enteredTitle: event.target.value,

    //   })
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    
  };

  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
    
  };
  const submitHandler= (event)=>{
    event.preventDefault();
    const expenseData={
      tilte: enteredTitle,
      amount: enteredAmount,
      date: new Date(enterdDate),

    }
    console.log(expenseData)

  }
  return (
    <form onSubmit ={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor=""> Title:</label>
          <input type="text" onChange={titleChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label htmlFor=""> Amount:</label>
          <input type="number" min="0.00" onChange={amountChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label htmlFor=""> Date:</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div id="expense_actions">
          <button>Add Expense:</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
