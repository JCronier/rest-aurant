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

// View States
const DASHBOARD = "DASHBOARD";
const ITEM_LIST = "ITEM_LIST";

const App = () => {

  const [viewState, setViewState] = useState(DASHBOARD);
  const [currentItemId, setCurrentItemId] = useState(null);

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getOrders());
    dispatch(getTables());
  }, [dispatch]);

  return (
    <div>
      {
        viewState === DASHBOARD && (
          <div>
            <div>
              <h1>I'THAI'LY - ADMIN DASHBOARD</h1>
              <h2>[STATUS TABLE]</h2>
              <StatusTable />
            </div>
            <div>
              <h2>[MENU]</h2>
              <div>
                <button type="button" onClick={() => setViewState(ITEM_LIST)} style={{ height: 50, width: 200 }}>MANAGE ITEMS</button>
              </div>
            </div>
          </div>
        )
      }
      {
        viewState === ITEM_LIST && (
          <div>
            <h1>I'THAI'LY - MANAGE ITEMS</h1>
            <ItemList setCurrentItemId={setCurrentItemId} />
            <ItemForm currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} />
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
    </div >
  );
};

export default App;