import React, { useState } from "react";

function AddTransactionForm() {

  const [formData, setFormData] = useState({
    date:"",
    description: "",
    category: "",
    amount: ""
});

  function handleChange(f) {
    const { name, value } = f.target;
    setFormData({ ...formData, [name]: value });
  };

function handleSubmit (e){
    e.preventDefault();
    console.log(formData);
    // Send formData to the server and save it in the database (db.json in this case)


    fetch('http://localhost:8002/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      ;
  };


  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button onClick = {handleSubmit} className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
