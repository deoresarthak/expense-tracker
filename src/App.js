import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 200,
      date: new Date(2022, 4, 15),
    },
    {
      title: "Bike Insurance",
      amount: 300,
      date: new Date(2022, 4, 16),
    },
    {
      title: "Life Insurance",
      amount: 400,
      date: new Date(2022, 4, 17),
    },
    {
      title: "House Insurance",
      amount: 500,
      date: new Date(2022, 4, 18),
    },
  ];
  return (
    <div>
      <h2>Let's get going!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
