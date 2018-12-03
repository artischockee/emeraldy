import React from 'react';

const Cell = ({
  empty,
  subject,
  place,
  teacher
}) => (
  <td>
    <div className="cell-wrapper">
      {!empty &&
        <>
        <p>{subject}</p>
        <p>{place}</p>
        <p>{teacher}</p>
      </>
    }
  </div>
</td>
);

export default Cell;