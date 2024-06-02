/* eslint-disable no-unused-vars */
import { useState } from "react"
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

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

        { 
            categories.map((category, i) => (
                    <GifGrid key={category} category={category} />                        
                )
            ) 
        }            
    </>
  )
}
