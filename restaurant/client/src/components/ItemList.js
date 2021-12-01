// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/items';
import { updateItem } from '../actions/items';

// Components
import Item from './Item';

// MUI - Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { GridCellParams } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import clsx from 'clsx';

// React-file-base64
import FileBase from 'react-file-base64';

// Styles
// import './styles.css';

// View States
const DASHBOARD = "DASHBOARD";

const ItemList = ({ setCurrentItemId, setViewState }) => {

  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  // const generateItems = () => (
  //   items.map((item) => (
  //     <Item key={item._id} item={item} setCurrentItemId={setCurrentItemId} />
  //   ))
  // );

  const generateItems = () => {
    let idCount = 0;

    return items.map((item) => {

      return {
        _id: item._id,
        id: ++idCount,
        photo: item.image_url,
        item: item.name,
        category: item.category,
        price: item.price,
        description: item.description,
        options: item.options.join(', '),
        tags: item.tags.join(', '),
        delete: item._id
      }
    });
  };

  const columns = [
    { field: 'photo', headerName: 'PHOTO', width: 107, editable: true, sortable: false, filterable: false, renderCell: (params) => <img src={params.value} style={{ width: 45, height: 45 }} /> },
    { field: 'item', headerName: 'ITEM', width: 200, editable: true },
    { field: 'category', headerName: 'CATEGORY', width: 163, editable: true },
    { field: 'price', headerName: 'PRICE (CAD)', width: 172, editable: true },
    { field: 'description', headerName: 'DESCRIPTION', width: 200, editable: true, sortable: false },
    { field: 'options', headerName: 'OPTIONS', width: 150, editable: true, sortable: false },
    { field: 'tags', headerName: 'TAGS', width: 150, editable: true, sortable: false },
    {
      field: 'delete',
      headerName: 'DELETE ITEM',
      width: 150,
      editable: false,
      sortable: false,
      filterable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <Button variant="outlined" onClick={(event) => {
        event.preventDefault();
        dispatch(deleteItem(params.value))
      }}>
        DELETE
      </Button >,
    }
  ];

  const CustomDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }`;

  const handleCellEditCommit = (model) => {
    const rows = generateItems();

    const _idOfItemToUpdate = rows.find((item) => item.id === model.id)._id;

    if (model.field === 'item') {
      const image_url = rows.find((item) => item._id === _idOfItemToUpdate).photo;
      const name = model.value;
      const category = rows.find((item) => item._id === _idOfItemToUpdate).category;
      const price = rows.find((item) => item._id === _idOfItemToUpdate).price;
      const description = rows.find((item) => item._id === _idOfItemToUpdate).description;
      const options = rows.find((item) => item._id === _idOfItemToUpdate).options.split(', ');
      const tags = rows.find((item) => item._id === _idOfItemToUpdate).tags.split(', ');

      console.log({ image_url: 'TOO LONG', name, category, price, description, options, tags });
      dispatch(updateItem(_idOfItemToUpdate, { image_url, name, category, price, description, options, tags }));
    }

    if (model.field === 'category') {
      const image_url = rows.find((item) => item._id === _idOfItemToUpdate).photo;
      const name = rows.find((item) => item._id === _idOfItemToUpdate).item;
      const category = model.value;
      const price = rows.find((item) => item._id === _idOfItemToUpdate).price;
      const description = rows.find((item) => item._id === _idOfItemToUpdate).description;
      const options = rows.find((item) => item._id === _idOfItemToUpdate).options.split(', ');
      const tags = rows.find((item) => item._id === _idOfItemToUpdate).tags.split(', ');

      console.log({ image_url: 'TOO LONG', name, category, price, description, options, tags });
      dispatch(updateItem(_idOfItemToUpdate, { image_url, name, category, price, description, options, tags }));
    }

    if (model.field === 'price') {
      const image_url = rows.find((item) => item._id === _idOfItemToUpdate).photo;
      const name = rows.find((item) => item._id === _idOfItemToUpdate).item;
      const category = rows.find((item) => item._id === _idOfItemToUpdate).category;
      const price = Number(model.value);
      const description = rows.find((item) => item._id === _idOfItemToUpdate).description;
      const options = rows.find((item) => item._id === _idOfItemToUpdate).options.split(', ');
      const tags = rows.find((item) => item._id === _idOfItemToUpdate).tags.split(', ');

      console.log({ image_url: 'TOO LONG', name, category, price, description, options, tags });
      dispatch(updateItem(_idOfItemToUpdate, { image_url, name, category, price, description, options, tags }));
    }

    if (model.field === 'description') {
      const image_url = rows.find((item) => item._id === _idOfItemToUpdate).photo;
      const name = rows.find((item) => item._id === _idOfItemToUpdate).item;
      const category = rows.find((item) => item._id === _idOfItemToUpdate).category;
      const price = rows.find((item) => item._id === _idOfItemToUpdate).price;
      const description = model.value;
      const options = rows.find((item) => item._id === _idOfItemToUpdate).options.split(', ');
      const tags = rows.find((item) => item._id === _idOfItemToUpdate).tags.split(', ');

      console.log({ image_url: 'TOO LONG', name, category, price, description, options, tags });
      dispatch(updateItem(_idOfItemToUpdate, { image_url, name, category, price, description, options, tags }));
    }

    if (model.field === 'options') {
      let options = [];

      if (model.value.length > 0) {
        options = model.value.split(',').map(option => option.trim()).filter(option => option !== '');
      }

      const image_url = rows.find((item) => item._id === _idOfItemToUpdate).photo;
      const name = rows.find((item) => item._id === _idOfItemToUpdate).item;
      const category = rows.find((item) => item._id === _idOfItemToUpdate).category;
      const price = rows.find((item) => item._id === _idOfItemToUpdate).price;
      const description = rows.find((item) => item._id === _idOfItemToUpdate).description;
      const tags = rows.find((item) => item._id === _idOfItemToUpdate).tags.split(', ');

      console.log({ image_url: 'TOO LONG', name, category, price, description, options, tags });
      dispatch(updateItem(_idOfItemToUpdate, { image_url, name, category, price, description, options, tags }));
    }

    if (model.field === 'tags') {
      let tags = [];

      if (model.value.length > 0) {
        tags = model.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
      }

      const image_url = rows.find((item) => item._id === _idOfItemToUpdate).photo;
      const name = rows.find((item) => item._id === _idOfItemToUpdate).item;
      const category = rows.find((item) => item._id === _idOfItemToUpdate).category;
      const price = rows.find((item) => item._id === _idOfItemToUpdate).price;
      const description = rows.find((item) => item._id === _idOfItemToUpdate).description;
      const options = rows.find((item) => item._id === _idOfItemToUpdate).options.split(', ');

      console.log({ image_url: 'TOO LONG', name, category, price, description, options, tags });
      dispatch(updateItem(_idOfItemToUpdate, { image_url, name, category, price, description, options, tags }));
    }
  };

  return (
    <CustomDataGrid
      rows={generateItems()}
      columns={columns}
      style={{
        height: 650,
        width: '100%',
      }}
      onCellEditCommit={handleCellEditCommit}
    >
    </CustomDataGrid>
  );

};

export default ItemList;