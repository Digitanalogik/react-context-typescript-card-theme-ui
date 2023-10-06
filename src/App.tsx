import React from "react";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="Page">
      <Header
        label="Player"
        player="Player"
      />
      <Table />
    </div>
  );
};

export default App;
