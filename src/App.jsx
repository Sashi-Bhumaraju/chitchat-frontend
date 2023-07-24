import { useState } from 'react'
import './App.css'

import Auth from './components/Auth';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <section className='app'>
           {/* <button onClick={handleClick}>sign in with google</button> */}
           <Auth></Auth>
      </section>
    
    </>
  )
}

export default App
