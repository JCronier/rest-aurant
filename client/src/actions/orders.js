import * as api from '../api';

// Action Creators
export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();

    dispatch({ type: 'ORDERS/FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrder = (newOrder) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(newOrder);

    dispatch({ type: 'ORDERS/CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrderStatus = async (id, isPaid) =>  {
  try {
    const message = await api.updateOrderPaymentStatus(id, isPaid);
    console.log(message)
  } catch (error) {
    console.log(error.message)
  }
}


// export const updateStatus = async (id, status) => {
//   try {
//     const message = await api.updateTableStatus(id, status);
//     console.log(message);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const editOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.putOrder(order);

    dispatch({ type: 'ORDERS/FETCH_ALL', payload: data });
    console.log(data, 'Order updated');
  } catch(error) {
    console.log(error.message);
  };
};
