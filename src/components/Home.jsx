import React from 'react';
import UseThunk from '../hooks/UseThunk';
import { SignOut } from '../store';
import { Outlet } from 'react-router-dom';
import styles from '../css/Home.module.css'
import ContactList from './screens/ContactList';


function Home() {

  const [runSignOutMethod, reult, isLoading, error ] = UseThunk(SignOut);
  const Logout = () => {
    runSignOutMethod();
  }
  return (
    <section className={styles.home}>
        <div className={styles.home_static_widget}> <ContactList/> </div>
        <div className={styles.home_dynamic_widget}> <Outlet></Outlet> </div>
    </section>
  )
}

export default Home;