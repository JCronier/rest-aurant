// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';

// Components
import Menu from './components/Menu';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])

  return (
    <div>
      <h1>App</h1>
      <Menu />
    </div>
  )
};

export default App;