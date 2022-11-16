function DessertsList({data}) {
  // Implement the component here.
  const filterData = data.filter((dessert) => dessert.calories < 500);
  const sortedData = filterData.sort((a,b) => {
    return a.calories - b.calories;
  })
  const trasfomedData = sortedData.map((dessert) => {
    const dessertText = `${dessert.name} - ${dessert.calories} cal`;
    return <li key={dessert.name}>{dessertText}</li>
  })

  return (
    <ul>
      {trasfomedData}
    </ul>
  );
}

export default DessertsList;
