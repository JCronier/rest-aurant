// React
import React from 'react';

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';

// View States
const ITEM = 'ITEM';

const MenuItem = ({ item, changeView }) => {

  const { setItem } = useContext(orderContext);

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