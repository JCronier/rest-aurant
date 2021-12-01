// React
import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createItem, updateItem } from '../actions/items';

// React-file-base64
import FileBase from 'react-file-base64';

// MUI - Components
import { Card, CardMedia, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles'; // sort

const ItemForm = ({ currentItemId, setCurrentItemId }) => {

  // State to keep track of data when
  // creating or updating an Item.
  const [itemData, setItemData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    options: '',
    tags: '',
    image_url: ''
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
      tags: '',
      image_url: ''
    });
  };

  // Function to handle when the form is submitted.
  const handleSubmit = (event) => {
    event.preventDefault();

    let options = [];
    let tags = [];

    if (itemData.options.length > 0) {
      options = itemData.options.split(',').map(option => option.trim()).filter(option => option !== '');
    }

    if (itemData.tags.length > 0) {
      tags = itemData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    }

    if (currentItemId) {
      dispatch(updateItem(currentItemId, { ...itemData, price: Number(itemData.price), options, tags }));
      clear();
    } else {
      dispatch(createItem({ ...itemData, price: Number(itemData.price), options, tags }));
      clear();
    }
  };

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Box sx={{ width: 600 }} component={Paper}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <br />
        <Typography align="center" variant="h5">{currentItemId ? `Update Item ${currentItemId}` : 'Create Item'}</Typography>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="Name" name="name" value={itemData.name} onChange={(event) => setItemData({ ...itemData, name: event.target.value })} />
          </FormControl>
        </div>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="price">Price</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="Price" name="price" value={itemData.price} onChange={(event) => setItemData({ ...itemData, price: event.target.value })} />
          </FormControl>
        </div>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="Description" name="description" value={itemData.description} onChange={(event) => setItemData({ ...itemData, description: event.target.value })} />
          </FormControl>
        </div>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="category">Category</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="Category" name="category" value={itemData.category} onChange={(event) => setItemData({ ...itemData, category: event.target.value })} />
          </FormControl>
        </div>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="options">Options</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="options" name="options" value={itemData.options} onChange={(event) => setItemData({ ...itemData, options: event.target.value })} />
          </FormControl>
        </div>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="tags">Tags</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="tags" name="tags" value={itemData.tags} onChange={(event) => setItemData({ ...itemData, tags: event.target.value })} />
          </FormControl>
        </div>
        <br />
        <div align="center">
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setItemData({ ...itemData, image_url: base64 })} />
          {/* <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onDone={({ test }) => setItemData({ ...itemData, image_url: test })} />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label> */}
        </div>
        <br />
        <div align="center">
          <Button sx={{ height: 25, width: 100 }} variant="outlined" type="submit">Create</Button>
        </div>
        <br />
        <div align="center">
          <Button sx={{ height: 25, width: 100 }} variant="outlined" type="button" onClick={clear}>Clear</Button>
        </div>
        <br />
      </form>
    </Box>
  );

};

export default ItemForm;