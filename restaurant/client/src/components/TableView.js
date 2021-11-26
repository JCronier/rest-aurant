import React, { useState } from "react";
import { createTable } from "../actions/tables";
import { useDispatch } from "react-redux";

const TableView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const tableId = event.target.tableId.value

    dispatch(createTable(tableId));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table ID
      </label>
      <input type="text" id="tableId" name="tableId" />
      <button type="submit">Create</button>
    </form>
  );
}

export default TableView;