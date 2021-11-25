// React
import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createItem, updateItem } from '../actions/items';

const ItemForm = ({ currentItemId, setCurrentItemId }) => {

  // State to keep track of data when
  // creating or updating an Item.
  const [itemData, setItemData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    options: '',
    tags: ''
  });

  // Grab Item from store with _id eqaul to value of currentItemId.
  const item = useSelector((state) => currentItemId ? state.items.find((i) => i._id === currentItemId) : null);

  // Sets state of itemData if item above is not null (if intent to update an item is detected).
  useEffect(() => {
    if (item) {
      setItemData({ ...item, options: item.options.toString(), tags: item.tags.toString() });
    }
  }, [item]);

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  const dispatch = useDispatch();

  // Function to handle when the form is submitted.
  const handleSubmit = (event) => {
    event.preventDefault();

    let options = [];
    let tags = [];

    if (itemData.options.length > 0 && itemData.tags.length > 0) {
      options = itemData.options.split(',').map(option => option.trim()).filter(option => option !== '');
      tags = itemData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    }

    if (currentItemId) {
      dispatch(updateItem(currentItemId, { ...itemData, price: Number(itemData.price), options, tags }));
    } else {
      dispatch(createItem({ ...itemData, price: Number(itemData.price), options, tags }));
    }

    clear();
  };

  // Clears itemData state which clears the form when
  // creating or updating an Item.
  const clear = () => {
    setCurrentItemId(null);
    setItemData({
      name: '',
      price: '',
      description: '',
      category: '',
      options: '',
      tags: ''
    });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <h1>{currentItemId ? `Update Item ${currentItemId}` : 'Create Item'}</h1>

      <div>
        <label htmlFor="name">Name</label>
        <input name="name" value={itemData.name} onChange={(event) => setItemData({ ...itemData, name: event.target.value })} />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input name="price" value={itemData.price} onChange={(event) => setItemData({ ...itemData, price: event.target.value })} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input name="description" value={itemData.description} onChange={(event) => setItemData({ ...itemData, description: event.target.value })} />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input name="category" value={itemData.category} onChange={(event) => setItemData({ ...itemData, category: event.target.value })} />
      </div>

      <div>
        <label htmlFor="options">Options</label>
        <input name="options" value={itemData.options} onChange={(event) => setItemData({ ...itemData, options: event.target.value })} />
      </div>

      <div>
        <label htmlFor="tags">Tags</label>
        <input name="tags" value={itemData.tags} onChange={(event) => setItemData({ ...itemData, tags: event.target.value })} />
      </div>

      <div>
        {/* INPUT FOR ITEM IMAGE  */}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      <div>
        <button type="button" onClick={clear}>Clear</button>
      </div>
    </form>
  );

};

export default ItemForm;