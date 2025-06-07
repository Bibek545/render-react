const List = () => {
    const fruits = [{id: 1 , name: "apple", calories: 95},
        {id: 2 , name: "orange", calories: 96},
        {id: 3 , name: "mango", calories: 97},
        {id: 4 , name: "lychee", calories: 98},
        {id: 5 , name: "grapes", calories: 99},
        
    ];

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(b.name)); Reverese alphabetical
    // fruits.sort((a,b) => a.calories - b.calories); numeric
        fruits.sort((a,b) => b.calories - a.calories);

    const listItems = fruits.map(fruit => <li key = {fruit.name}> {fruit.name}: {fruit.calories}</li>);

        return (<ol>{listItems}</ol>);
}

export default List;