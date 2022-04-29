import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid  from './components/GifGrid';

const GifExpertApp = () => {
 // const categories = [ 'one punch',"one piece","Dragon ball"];
 //se usa un hoots
const [categories, setCategories] = useState(['one punch']);
//  const handleAdd = () =>{
//     //setCategories(...categories,'Naruto');
//     setCategories( cats => [...cats, 'Naruto']);
//  }

  return (
      <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories = {setCategories}/>
    <hr></hr>

    <ol>
      { 
        categories.map( category =>( 
          < GifGrid key= {category}  category = {category}/>
        ))
      }
    </ol>
    </>
  )
}

export default GifExpertApp;
