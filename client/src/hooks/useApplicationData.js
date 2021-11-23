import { useState, useEffect } from "react";

const useApplicationData = () => {

  //container for all relevant states
  const [state, setState] = useState({
    item: null,
    order: [],
    table: null
  });

  // order: [
  //   {
  //     item_id: 123,
  //     values: ['extra cheese']
  //   },
  //   {
  //     item_id: 123,
  //     values: []
  //   },
  //   {
  //     item_id: 477,
  //     values: []
  //   }
  // ]


  //sets the current item we're looking at
  const setItem = item => setState({ ...state, item });

  const addItem = (item, options) => {
    const newItem = {
      item_id: item,
      optionValues: options
    };

    setState(prev => ({ ...prev, order: [...prev.order, newItem] }));
  };


  //pesudocode
  // const removeitem function (itemIndex)
  // removes item from order array in state.order



  // //updates the state to match when any other effect is made
  // useEffect(() => {
  //   Promise.all([
  //     axios.get('/api/days'),
  //     axios.get('/api/appointments'),
  //     axios.get('/api/interviewers')
  //   ]).then((all) => {
  //     setState(prev => ({...prev , days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
  //   });
  // }, [])

  //returns the state and functions to whichever components require it
  return { state, setItem, addItem };
}

export default useApplicationData;