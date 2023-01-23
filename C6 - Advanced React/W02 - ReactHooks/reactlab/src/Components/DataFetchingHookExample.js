import React, {useState,useEffect} from 'react'

const DataFetchingHookExample = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then((response) => response.json())
        .then((json) => setData(json.bpi.USD))
        .catch( (error) => console.log(error));
}, []);
  return (
    <div> 
      <h1>Current BTC/USD data</h1> 
      <p>Code: {data.code}</p> 
      <p>Symbol: {data.symbol}</p> 
      <p>Rate: {data.rate}</p> 
      <p>Description: {data.description}</p> 
      <p>Rate Float: {data.rate_float}</p> 
    </div> 
  )
}

export default DataFetchingHookExample;
