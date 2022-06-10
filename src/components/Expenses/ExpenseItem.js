import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <li>
      <Card className="item">
        <ExpenseDate date={props.date} />
        <div className="item_description">
          <h2>{title}</h2>
        </div>
        <div className="amount">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
