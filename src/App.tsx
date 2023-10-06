import React from "react";
import { ThemeContextProvider } from './Context/ThemeContext';
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <ThemeContextProvider>
      <div className="Page">
        <Header
          label="Player"
          player="Player"
        />
        <Table />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
