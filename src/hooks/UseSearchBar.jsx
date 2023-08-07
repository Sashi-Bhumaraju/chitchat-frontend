import React, { useState } from 'react'
import styles from '../css/SearchBar.module.css'

function UseSearchBar(placeHolder) {

  const [value,setValue] = useState('');
  // const [placeHolder, setPlaceHolder] = useState('');

  const reset = () => {
    setValue('');
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value);
  }
 
   
  const SearchBar = <div className={styles.search_bar} >
         <input  value={value} onChange={handleChange} placeholder={placeHolder} ></input>
      </div>
    

  return [SearchBar,value];
}

export default UseSearchBar;