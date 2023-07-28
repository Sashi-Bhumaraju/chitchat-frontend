import React from 'react';
import UseThunk from '../hooks/UseThunk';
import { SignOut } from '../store';
import { Outlet } from 'react-router-dom';


function Home() {

  const [runSignOutMethod, reult, isLoading, error ] = UseThunk(SignOut);
  const Logout = () => {
    runSignOutMethod();
  }
  return (
    <section>
        {/* <div>Home</div> */}
        <button onClick={Logout}>logout</button>
        <h1> pichhi puuku venky  </h1>
        {/* <Outlet></Outlet> */}
    </section>
  )
}

export default Home;