import React, { useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import Card from '../Card/Card';

const Table = (): JSX.Element => {
  const { theme } = useTheme();
  const [imageUrl] = useState(`${process.env.PUBLIC_URL}/background-${theme}.jpg`);

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