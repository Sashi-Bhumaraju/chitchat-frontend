import React, { useState } from 'react'
import styles from '../css/SearchBar.module.css'

function UseSearchBar(placeHolder) {

  const [value,setValue] = useState('');
  // const [placeHolder, setPlaceHolder] = useState('');

  const reset = () => {
    setValue('');
  }
 
  function SearchBar() {
    return (
      <div className={styles.search_bar} >
         <input placeholder={placeHolder} ></input>
      </div>
    )
  }

  return [SearchBar,value,reset];
}

export default UseSearchBar;