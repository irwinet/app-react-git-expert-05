/* eslint-disable no-unused-vars */
import { useState } from "react"
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Gragon Ball']);

  //   console.log(categories);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant']);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/* <AddCategory setCategories = { setCategories } /> */}
        <AddCategory onNewCategory={value => onAddCategory(value)} />

        {/* <button onClick={onAddCategory}>Agregar</button> */}

        <ol>
            { categories.map((category, i) => {
                return <li key={category}>{category}</li>
            }) }            
        </ol>

    </>
  )
}
