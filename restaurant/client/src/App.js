// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';
import { getOrders } from './actions/orders';
import { getTables } from './actions/tables';

// Components
import ItemList from './components/ItemList';
import OrderList from './components/OrderList';
import TableList from './components/TableList';
import ItemForm from './components/ItemForm';
import TableForm from './components/TableForm';
import StatusTable from './components/StatusTable';

// MUI - Components
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// MUI - Icons
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';

// View States
const DASHBOARD = "DASHBOARD";
const ITEM_LIST = "ITEM_LIST";
const TABLE_LIST = "TABLE_LIST";

const App = () => {

  const [viewState, setViewState] = useState(DASHBOARD);
  const [currentItemId, setCurrentItemId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getOrders());
    dispatch(getTables());
  }, [dispatch]);

  return (
    <Paper variant="outlined">
      {
        viewState === DASHBOARD && (
          <div>
            <br />
            <br />
            <Typography variant="h3" align="center">I'THAI'LY - Admin Dashboard</Typography>
            <br />
            <br />
            <Stack spacing={2}>
              <Button variant="contained" size="medium" startIcon={<FastfoodIcon />} onClick={() => setViewState(ITEM_LIST)}>Manage Items</Button>
              <Button variant="contained" size="medium" startIcon={<TableRestaurantIcon />} onClick={() => setViewState(TABLE_LIST)}>Manage Tables</Button>
            </Stack>
            <br />
            <br />
            <div>
              <StatusTable />
            </div>
          </div>
        )
      }
      {
        viewState === ITEM_LIST && (
          <div>
            <Typography variant="h1" align="center">I'THAI'LY - Manage Items</Typography>
            <ItemList setCurrentItemId={setCurrentItemId} setViewState={setViewState} />
            <ItemForm currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} />
          </div>
        )
      }
      {
        viewState === TABLE_LIST && (
          <div>
            <Typography variant="h1" align="center">I'THAI'LY - Manage Tables</Typography>
            <TableList setViewState={setViewState} />
            <TableForm />
          </div>
        )
      }
      {/* <div>
        <h1>Items</h1>
        <ItemList setCurrentItemId={setCurrentItemId} />
      </div> */}
      {/* <div>
        <h1>Orders</h1>
        <OrderList />
      </div> */}
      {/* <div>
        <h1>Tables</h1>
        <TableList />
      </div> */}
      {/* <div>
        <ItemForm currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} />
      </div> */}
      {/* <div>
        <TableForm />
      </div> */}
    </Paper >
  );
};

export default App;