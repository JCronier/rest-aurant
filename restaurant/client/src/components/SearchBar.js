import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
      <div style={{display:'flex', justifyContent:'space-between'}}>
          <TextField
            name="s"
            placeholder="Search Items"
            sx={{width: '100%'}}
            variant="standard"
            onInput={e => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
  </form>
);

export default SearchBar;

