import React, { useState } from "react";
import "./Card.scss";

//import cardNature from '../../Images/card-nature.jpg';

interface CardProps {
  title?: string;
  value: number;
}

const Card = (props: CardProps): JSX.Element => {
  //let cardClass = "card-container" + (props.selected ? " selected" : "");

  const [imageUrl] = useState('./card-nature.jpg');

  const  cardClass = "card-container";
  if (typeof props.title === "undefined") {
    return (
      <div className={cardClass}
      style={{ width: 200, height: 300, backgroundImage: `url(${imageUrl})` }}>
        <div className="card-value">{props.value}</div>
      </div>
    );
  } else {
    return (
      <div className={cardClass}
      style={{ width: 200, height: 300, backgroundImage: `url(${imageUrl})` }}>
        <div className="card-title">{props.title}</div>
        <div className="card-value">{props.value}</div>
      </div>
    );
  }
};

export default Card;
