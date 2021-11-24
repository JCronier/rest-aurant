// React
import React from 'react';

const Item = ({ item }) => {

  return (
    <div>
      <div>_id: {item._id}</div>
      <div>name: {item.name}</div>
      <div>price: {item.price}</div>
      <div>description: {item.description}</div>
      <div>category: {item.category}</div>
      <div>options: {JSON.stringify(item.options)}</div>
      <div>tags: {JSON.stringify(item.tags)}</div>
      <br />
    </div>
  );

};

export default Item;