import React, { useState } from "react";
import { createTable } from "../actions/tables";

const TableView = () => {
  const [qr, setQr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const tableId = event.target.tableId.value

    createTable(tableId).then((data) => setQr(data.qr_code));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table ID
      </label>
      <input type="text" id="tableId" name="tableId"/>
      <button type="submit">Create</button>
      <img src={qr} alt="fuck"/>
    </form>
  );
}

export default TableView;