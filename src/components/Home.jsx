import React from 'react';
import UseThunk from '../hooks/UseThunk';
import { SignOut } from '../store';


function Home() {

  const [runSignOutMethod, reult, isLoading, error ] = UseThunk(SignOut);
  const Logout = () => {
    runSignOutMethod();
  }
  return (
    <section>
        <div>Home</div>
        <button onClick={Logout}>logout</button>
    </section>
  )
}

export default Home;