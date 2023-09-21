import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList(props) {
  const [transcationData, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(transcationData);


  let {search} = props;
  function fetchData () {
    return fetch('http://localhost:8002/transactions') 
    .then((response) => response.json())
    .then((data) => {
      setData(data); 
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };


  useEffect(() => {
    fetchData()
  }, [transcationData]); 


  useEffect(() => {
    // Filter the data based on the selected illness
    if (search === '') {
      setFilteredData(transcationData);
    } else {
      const filtered = transcationData.filter((item) =>
        item.description.includes(search)
      );
      setFilteredData(filtered);
    }
  }, [search, transcationData]);


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filteredData.map((transaction) => (
          <Transaction
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
