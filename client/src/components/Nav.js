import React, { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from '../providers/ViewProvider';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Button, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './CartList/styles.css'

const CART = 'CART';
const ORDERED = 'ORDERED';
const MENU = 'MENU';
const pages = ['Menu'];

const Nav = () => {
  const { state, getOrderId } = useContext(orderContext);
  const { changeView } = useContext(viewContext);

  const checkOrderId = () => {
    getOrderId() ? changeView(ORDERED) : changeView(CART);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => changeView(MENU)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              I'Thai'ly
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              {<IconButton title="Cart" onClick={() => checkOrderId()}><ShoppingCartRoundedIcon sx={{ color: 'white' }} /><div className='total' >{state.order.length}</div></IconButton>}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Nav;