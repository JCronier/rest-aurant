// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Item from './Item';

const ItemList = ({ setCurrentItemId }) => {

  // Retrieve all records of the Item model
  // that is in the items store.
  const items = useSelector((state) => state.items);

  // Generate array of Item components.
  const generateItems = () => (
    items.map((item) => (
      <Item key={item._id} item={item} setCurrentItemId={setCurrentItemId} />
    ))
  );

  return (
    <div>
      <div>
        {!items.length ? "Loading..." : generateItems()}
      </div>
    </div>
  );

};

export default ItemList;