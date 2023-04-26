import React, { useState, useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';
import './Tables.css';

import { useSelector, useDispatch } from 'react-redux';
import { getData } from './TablesApi';

function StripedRowExample() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const handleCellClick = (file) => {
    dispatch(getData(file));
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  if (!data && !data.files && !data.columns) { // Verificación para evitar el error
    return <p>Cargando...</p>;
  }
  if(data.columns){
    return (
    <>
        <Button className='mb-5' onClick={() => handleCellClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>
        </Button>
        <Table striped className="shadow-lg">
        <thead>
          {data.columns.map((item) => (
            <th className="row-interactive" key={item}>
              <td key={item}>{item}</td>
            </th>
          ))}
          
        </thead>
        <tbody>
          {data.lines.map((item) => (
            <tr className="row-interactive" key={item.number}>
              <td key={item.number}>{data.file}</td>
              <td key={item.number}>{item.text}</td>
              <td key={item.number}>{item.number}</td>
              <td key={item.number}>{item.hex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
    )
  }
  if(data.files){
    return (
      <Table striped className="shadow-lg">
        <thead>
        <th>Files</th>
          
        </thead>
        <tbody>
          {data.files.map((item) => (
            <tr className="row-interactive" key={item}>
              <td onClick={() => handleCellClick(item)} key={item} >{item}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
  
  export default StripedRowExample;