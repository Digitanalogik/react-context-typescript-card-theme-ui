import React, { useState } from "react";
import Card from "../Card/Card";
import "./Table.scss";

// import backgroundNature from '../../Images/background-nature.jpg';

const Table = (): JSX.Element => {
  // const [selected, setSelected] = useState(0);
  // console.log("Creating poker table in room", props.room);

  const [imageUrl] = useState('./background-nature.jpg');

  const renderCards = () => {
    const cards = [];
    for (let i = 1; i < 10; i++) {
      cards.push(
        <Card
          key={i}
          value={i}
        />,
      );
    }
    return cards;
  };

  return (
    <div className="poker-table"
    style={{ backgroundImage: `url(${imageUrl})` }}>
      {renderCards()}</div>
    );
};

export default Table;
