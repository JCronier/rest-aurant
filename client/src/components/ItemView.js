// React
import React, { useEffect, useState } from 'react';

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from '../providers/ViewProvider';

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


// Redux
import { useSelector } from 'react-redux';

// View States
const MENU = 'MENU';

const ItemView = () => {

  const { state, resetItem, addItemToOrder } = useContext(orderContext);
  const { changeView } = useContext(viewContext);


  // Retrieve all records of the Item model
  // that is in the items store.
  const items = useSelector((state) => state.items);

  // Find Item record with _id that is in focus.
  const item = items.find(item => {
    return item._id === state.item;
  });

  // Keeps track of an array of boolean values
  // that is used to map each boolean to a listed option.
  //
  // Example:
  //
  // optionsState = [false, false]
  //                    |     |________________________
  //                    |                              |
  //                    V                              V
  // item.options = ["Exclude - Peanuts", "Extra - Pancetta +$ 2.95"]
  const [optionsState, setOptionsState] = useState(
    new Array(item.options.length).fill(false)
  );

  // Function to handle clicks on checkbox-type input tags (our options),
  // which updates optionsState by matching the index given to each checkbox-type
  // during creation (see how the options variable gets populated after this function).
  const handleOnChange = (position) => {
    const updatedOptionsState = optionsState.map((isIncluded, index) =>
      (index === position ? !isIncluded : isIncluded)
    );

    setOptionsState(updatedOptionsState);
  };

  // Generate checkbox-type input tags that represent options connected to
  // the item in focus.
  //
  // options, being an array of checkbox-type input tags, will then be
  // inserted within a form to be rendered.
  const options = item.options.map((option, index) => {

    return (
      <ListItem
        key={index}
        disablePadding
      >
        <ListItemButton role={undefined} onClick={() => handleOnChange(index)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={optionsState[index]}
              value={option}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText id={option} primary={option} />
        </ListItemButton>
      </ListItem>
    );


  })

  // Constructs the final list of options (including special instructions).
  const finalizeOptions = (specialInstruction) => {
    const finalOptions = [];

    optionsState.forEach((isIncluded, index) => {
      if (isIncluded) {
        finalOptions.push(item.options[index]);
      }
    });

    specialInstruction && finalOptions.push(specialInstruction);

    return finalOptions;
  };

  // Function to handle the submitting of the form,
  // which contains all the checkbox-type input tags
  // representing options pertaining to the item in focus.
  const handleSubmit = (event) => {
    event.preventDefault();

    const finalOptions = finalizeOptions(event.target.customOption.value);

    addItemToOrder(item._id, finalOptions);

    // resetItem();

    changeView(MENU);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <h3>Options:</h3>
      <br />
      <form onSubmit={(event) => handleSubmit(event)}>
        {options}
        <br />
        <div>
          <TextField name="customOption" minRows={2} placeholder="Special Instructions" sx={{width: '100%'}} variant="standard"></TextField >
        </div>
        <div style={{position: 'fixed', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Button
            variant="contained"
            type="submit"
            sx={{width: '95%'}}
            >
              Add to Order ${item.price}
          </Button>
        </div>
      </form>
    </div>
  );

}

export default ItemView;