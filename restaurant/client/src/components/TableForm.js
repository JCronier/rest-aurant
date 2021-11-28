import React, { useState } from "react";
import { createTable } from "../actions/tables";
import { useDispatch } from "react-redux";

const TableView = () => {
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
    <form onSubmit={handleSubmit}>
      <label>
        Table ID
      </label>
      <input type="text" id="tableId" name="tableId" />
      {error && <p style={{ color: 'red' }} >That table already exists.</p>}
      <button type="submit">Create</button>
    </form>
  );
}

export default TableForm;