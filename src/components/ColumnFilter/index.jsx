import React from 'react';

const ColumnFilter = ({filterValue, setFilter }) => {
  // const { filterValue, setFilter } = column;
  return (
    <span>
      <input 
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder="Filtrar por.."
      />
    </span>
  )
}

export default ColumnFilter;