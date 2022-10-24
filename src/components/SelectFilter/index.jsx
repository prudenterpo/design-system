import React from 'react';
import { COLUMNS } from '../../mockData/mockDataTable';

const SelectFilter = ({ filterValue, setFilter, indexValue, list }) => {
  // const { filterValue, setFilter } = column;
  // const indexValue = COLUMNS.findIndex((e) => e.accessor === "portifolio_or_presignup")
  // console.log(indexValue)
  const accessor = COLUMNS[indexValue].accessor
  const columnListValue = []
  const setList = new Set();
  
  list.map((item, index) => {
    columnListValue.push(item.values[accessor])
  })

  columnListValue.forEach((value) => {
    setList.add(value)
  })
  
  return (
    <span>
      <select
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      >
        <option>Filtrar por..</option>
          {Array.from(setList).map((item) => (
            <option>{item}</option>
        ))}
      </select> 
    </span>
  )
}

export default SelectFilter;