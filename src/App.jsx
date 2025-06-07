import List from "./List";
import "./App.css";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 96 },
    { id: 3, name: "mango", calories: 97 },
    { id: 4, name: "lychee", calories: 98 },
    { id: 5, name: "grapes", calories: 99 },
  ];

    const vegetables = [
    { id: 1, name: "potatto", calories: 115 },
    { id: 2, name: "tomato", calories: 55 },
    { id: 3, name: "carrots", calories: 44 },
    { id: 4, name: "corn", calories: 30 },
    { id: 5, name: "brocolli", calories: 25 },
  ];
     const foods = [
    { id: 1, name: "pizza", calories: 600 },
    { id: 2, name: "pasta", calories: 750 },
    { id: 3, name: "burger", calories: 350 },
    { id: 4, name: "steak", calories: 477 },
    { id: 5, name: "rolls", calories: 252 },
  ];
  return (
    <>
      <List items={fruits} category = "fruits"></List>
      <List items = {vegetables} category = "vegetables"/>
      <List items = {foods} category = "foods"/>
    </>
  );
}

export default App;
