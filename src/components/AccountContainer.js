import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



function AccountContainer() {
  const [search, setSearch] = useState('');


  const searchFunction = (event) => {
    setSearch(event.target.value);
    console.log(search);


};

  return (
    <div>
      <Search onSearch={searchFunction} />
      <AddTransactionForm />
      <TransactionsList search={search} />
    </div>
  );
}

export default AccountContainer;
