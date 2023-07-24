import { useState } from 'react'
import './App.css'

import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import Home from './components/Home';

function App() {
 
  const user = useSelector((store => store.user.data));

  console.log(user);
  return (
    <>
      <section className='app'>
           {/* <button onClick={handleClick}>sign in with google</button> */}
          {user? <Home></Home> :  <Auth></Auth> }
      </section>
    
    </>
  )
}

export default App
