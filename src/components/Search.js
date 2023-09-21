import React from "react";

function Search(props) {
 const {onSearch} = props;

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={onSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
