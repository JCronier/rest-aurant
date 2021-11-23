// React
import React from 'react';

// View States
const ITEM = 'ITEM';

const MenuItem = ({ item, changeView, setItem }) => {

  // Function that updates the view state and item to focus on.
  const viewDetails = () => {
    setItem(item._id);
    changeView(ITEM);
  };

  return (
    <div>
      <button style={{ width: 40 + 'em' }} onClick={() => viewDetails()}>
        <div>
          <h1>{item.name}</h1>
          <p>$ {item.price}</p>
          <p>{item.description}</p>
        </div>
      </button>
    </div>
  );

};

export default MenuItem;