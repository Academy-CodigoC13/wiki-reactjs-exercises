import React, { useState } from "react";

import "./App.css";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Strawberry",
    "Cherry",
    "Kiwi",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilterList(list);
      return;
    }
    const fileteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilterList(fileteredValues);
  };

  return (
    <div className="App">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}

export default App;
