import React from 'react';
import Cell from './Cell';

const TableRow = ({ data, time }) => (
  <tr>
    <th scope="row">
      <span>{time.start}</span>
      <span>{time.end}</span>
    </th>
    {data.map((cell, i) => (
      cell.subject
      ? <Cell key={i} {...cell} />
      : <Cell key={i} empty />
    ))}
  </tr>
);

export default TableRow;