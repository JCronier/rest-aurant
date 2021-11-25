// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/items';

const Item = ({ item, setCurrentItemId }) => {

  const dispatch = useDispatch();

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
      <button type="button" onClick={() => dispatch(deleteItem(item._id))}>DELETE</button>
      <br />
      <br />
    </div>
  );

};

export default Item;