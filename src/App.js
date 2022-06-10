import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 200,
    date: new Date(2022, 4, 15),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 300,
    date: new Date(2022, 4, 16),
  },
  {
    id: "e3",
    title: "Life Insurance",
    amount: 400,
    date: new Date(2022, 4, 17),
  },
  {
    id: "e4",
    title: "House Insurance",
    amount: 500,
    date: new Date(2022, 4, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
