import React, { useState } from "react";
import { createTable } from "../actions/tables";
import { useDispatch } from "react-redux";

// MUI - Components
import { Card, CardMedia, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const TableForm = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const tableId = event.target.tableId.value

    dispatch(createTable(tableId))
      .then((e) => {
        e ? setError(true) : setError(false);
      });
  }

  return (
    <Box sx={{ width: 600 }} component={Paper}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <br />
        <Typography align="center" variant="h5">Create Table</Typography>
        <br />
        <div align="center">
          <FormControl>
            <InputLabel htmlFor="tableId">ID</InputLabel>
            <OutlinedInput sx={{ height: 50, width: 500 }} label="ID" name="tableId" />
          </FormControl>
        </div>
        <br />
        <div align="center">
          {error && <Typography variant="h6" sx={{ color: 'red' }} >Table already exists.</Typography>}
        </div>
        <br />
        <div align="center">
          <Button sx={{ height: 25, width: 100 }} variant="outlined" type="button" type="submit">Create</Button>
        </div>
        <br />
      </form>
    </Box>
  );
}

export default TableForm;