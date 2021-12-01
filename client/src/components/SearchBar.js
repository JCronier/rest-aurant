import React from "react";
import { TextField, Button } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
      <div style={{display:'flex', justifyContent:'space-between'}}>
          <TextField
            name="s"
            placeholder="Search Menu"
            sx={{width: '85%'}}
            variant="standard"
            onInput={e => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        <Button
            variant="contained"
            type="submit"
            sx={{width: '10%'}}
          >
              Search
          </Button>
        </div>
  </form>
);

export default SearchBar;