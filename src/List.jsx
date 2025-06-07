const List = (props) => {
  const itemList = props.items;
  const category = props.category;

  // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
  // fruits.sort((a,b) => b.name.localeCompare(b.name)); Reverese alphabetical
  // fruits.sort((a,b) => a.calories - b.calories); numeric
  // fruits.sort((a,b) => b.calories - a.calories); reverse numeric

  //   const lowCalFruits = itemList.filter((item) => item.calories < 97); //using filter method to compare

  const listItems = itemList.map((item) => (
    <li key={item.name}>
      {item.name}:{item.calories}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};

export default List;
