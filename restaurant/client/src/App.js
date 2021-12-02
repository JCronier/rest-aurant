// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';
import { getOrders } from './actions/orders';
import { getTables } from './actions/tables';

// Components
// import ItemList from './components/ItemList';
import OrderList from './components/OrderList';
import TableList from './components/TableList';
import ItemForm from './components/ItemForm';
import TableForm from './components/TableForm';
import StatusTable from './components/StatusTable';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

// MUI - Components
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Card } from '@mui/material';

// MUI - Icons
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DashboardIcon from '@mui/icons-material/Dashboard';

// View States
const DASHBOARD = "DASHBOARD";
const ITEM_LIST = "ITEM_LIST";
const TABLE_LIST = "TABLE_LIST";

const App = () => {

  const [viewState, setViewState] = useState(DASHBOARD);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getOrders());
    dispatch(getTables());
  }, [dispatch]);

  const tableFormContainerStyle = {
    display: 'flex',
    width: '100%',
    'justify-content': 'center'
  }

  return (
    <Container maxWidth={false} sx={{ width: '100%' }}>
      {
        viewState === DASHBOARD && (
          <Container maxWidth={false} sx={{ width: '100%' }}>
            <br />
            <Typography variant="h4" align="center">I'Thai'ly - Admin Dashboard</Typography>
            <br />
            <Stack spacing={2}>
              <Button variant="contained" size="medium" startIcon={<FastfoodIcon />} onClick={() => setViewState(ITEM_LIST)}>Manage Items</Button>
              <Button variant="contained" size="medium" startIcon={<TableRestaurantIcon />} onClick={() => setViewState(TABLE_LIST)}>Manage Tables</Button>
            </Stack>
            <br />
            <StatusTable />
          </Container>
        )
      }
      {
        viewState === ITEM_LIST && (
          <Container maxWidth={false} sx={{ width: '100%' }}>
            <br />
            <Typography variant="h4" align="center">I'Thai'ly - Manage Items</Typography>
            <br />
            <Stack spacing={2}>
              <Button variant="contained" size="medium" startIcon={<DashboardIcon />} onClick={() => setViewState(DASHBOARD)}>DASHBOARD</Button>
              <Button variant="contained" size="medium" startIcon={<TableRestaurantIcon />} onClick={() => setViewState(TABLE_LIST)}>Manage Tables</Button>
            </Stack>
            <br />
            <div style={tableFormContainerStyle}>
              <ItemForm currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} />
            </div>
            <br />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <br />
            <ItemList setCurrentItemId={setCurrentItemId} setViewState={setViewState} searchQuery={searchQuery} />
          </Container>
        )
      }
      {
        viewState === TABLE_LIST && (
          <Container maxWidth={false} sx={{ width: '100%' }}>
            <br />
            <Typography variant="h4" align="center">I'Thai'ly - Manage Tables</Typography>
            <br />
            <Stack spacing={2}>
              <Button variant="contained" size="medium" startIcon={<DashboardIcon />} onClick={() => setViewState(DASHBOARD)}>DASHBOARD</Button>
              <Button variant="contained" size="medium" startIcon={<FastfoodIcon />} onClick={() => setViewState(ITEM_LIST)}>Manage Items</Button>
            </Stack>
            <br />
            <div style={tableFormContainerStyle}>
              <TableForm />
            </div>
            <br />
            <TableList setViewState={setViewState} />
          </Container>
        )
      }
    </Container >
  );

};

export default App;