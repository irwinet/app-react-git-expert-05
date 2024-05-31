/* eslint-disable react/prop-types */
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    if(inputValue.trim().length<=1) return;
    // setCategories( cat => [inputValue, ...cat]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type="text" placeholder="Buscar gifs" value={inputValue}
        onChange={ (event) => onInputChange(event)} />
    </form>
  )
}
