import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, styled, TableCell, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


  const OrderTable = () => {
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={items.find((item) => item._id === cartItem.item_id).name}>
              <StyledTableCell component="th" scope="row">
                {items.find((item) => item._id === cartItem.item_id).name}
              </StyledTableCell>
              <StyledTableCell align="right">{items.find((item) => item._id === cartItem.item_id).price}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton color="primary" onClick={() => viewDetails(cartItem.item_id)}><AddCircleOutlineIcon /></IconButton>
                <IconButton onClick={() => removeItemFromOrder(index)}><DeleteOutlineOutlinedIcon sx={{ color: 'red' }}/></IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }


  const cart = state.order.map((cartItem, index) => {
    return (
      <ListItem
        sx={{ display: 'flex', height: '100%', justifyContent: 'space-between' }}
        alignItems="center"
        divider={true}
        disableGutters
        secondaryAction={
          <div>
            {<IconButton color="primary" onClick={() => viewDetails(cartItem.item_id)}><AddCircleOutlineIcon /></IconButton>}
            <IconButton onClick={() => removeItemFromOrder(index)}><DeleteOutlineOutlinedIcon sx={{ color: 'red' }}/></IconButton>
          </div>
        }
      >
        <List sx={{display: 'flex', flexDirection: 'column', padding: '8px'}}>
          <ListItemText primary={items.find((item) => item._id === cartItem.item_id).name} />
          {cartItem.optionValues.map((optionValue) => <ListItem>{optionValue}</ListItem>)}
        </List>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ListItemText primary={'$' + items.find((item) => item._id === cartItem.item_id).price} />
        </div>
        </ListItem>
    )
  });