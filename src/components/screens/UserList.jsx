import React from 'react';
import styles from '../../css/UserList.module.css'
import UseThunk from '../../hooks/UseThunk';
import { GetAllUsers } from '../../store';

function UserList() {

  const [ ] = UseThunk(GetAllUsers);

  return (
    <section className={styles.user_list}>
         <div>UserList</div>
    </section>
  )
}

export default UserList