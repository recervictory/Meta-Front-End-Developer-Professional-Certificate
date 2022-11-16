function DessertsList({data}) {
  // Implement the component here.
  const lowCaloriesDesserts = data.filter((dessert) => 
  {return dessert.calories < 500
  })
  .sort((a,b) => {return a.calories - b.calories
  })
  .map((dessert) => {
    return (<li>{dessert.name} - {dessert.calories} cal</li>)
  })

  return (
    <ul>
      {lowCaloriesDesserts}
    </ul>
  );
}

export default DessertsList;
