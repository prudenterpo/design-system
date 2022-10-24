import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { BiSearchAlt } from 'react-icons/bi';
import { InputFilterContainer } from './styles';


const InputFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)

  return (
    <InputFilterContainer>
      <input 
        autoFocus
        placeholder="Pesquisar.."
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
      <span><BiSearchAlt /></span>
    </InputFilterContainer>
  )
}

export default InputFilter;