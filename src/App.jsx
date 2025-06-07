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
  return (
    <>
      <List items={fruits} category = "fruits">Fruits</List>
      <List items = {vegetables} category = "vegetables"/>
    </>
  );
}

export default App;
