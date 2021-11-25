// React
import React from 'react';

const Item = ({ item, setCurrentItemId }) => {

  return (
    <div>
      <div>_id: {item._id}</div>
      <div>name: {item.name}</div>
      <div>price: {item.price}</div>
      <div>description: {item.description}</div>
      <div>category: {item.category}</div>
      <div>options: {JSON.stringify(item.options)}</div>
      <div>tags: {JSON.stringify(item.tags)}</div>
      <button type="button" onClick={() => setCurrentItemId(item._id)}>UPDATE</button>
      <button>DELETE</button>
      <br />
      <br />
    </div>
  );

};

export default Item;