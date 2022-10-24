import React from 'react';

import { InputSpan } from './styles';

const ColumnFilter = ({ filterValue, setFilter }) => {
  // const { filterValue, setFilter } = column;
  return (
    <InputSpan>
      <input 
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder="Filtrar por.."
      />
    </InputSpan>
  )
}

export default ColumnFilter;