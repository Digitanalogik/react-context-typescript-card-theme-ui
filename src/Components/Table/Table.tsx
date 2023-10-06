import React, { useState, useEffect } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import Card from '../Card/Card';
import "./Table.scss";

const Table = (): JSX.Element => {
  const { theme } = useTheme();
  const [imageUrl, setImageUrl] = useState(`${process.env.PUBLIC_URL}/background-${theme}.jpg`);

  useEffect(() => {
    setImageUrl(`${process.env.PUBLIC_URL}/background-${theme}.jpg`);
  }, [theme])

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
    <div className="poker-table" style={{ backgroundImage: `url(${imageUrl})` }}>
      {renderCards()}
    </div>
  );
};

export default Table;