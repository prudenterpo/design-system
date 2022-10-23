import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const InputFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)

  return (
    <span>
      Pesquisar: {' '}
      <input 
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </span>
  )
}

export default InputFilter;