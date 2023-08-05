import React, { useEffect } from 'react';
import styles from '../../css/UserList.module.css'
import UseThunk from '../../hooks/UseThunk';
import { GetAllSearchedUsers, GetAllUsers } from '../../store';
import UserListItem from '../widgets/UserListItem';
import UseSearchBar from '../../hooks/UseSearchBar';

function UserList() {

  const [runGetAllSearchedUsers, data, loading, error] = UseThunk(GetAllSearchedUsers);
  const [SearchBar, searchedValue, reset] = UseSearchBar('search user');
  useEffect(()=>{ searchedValue.trim.length != 0 && runGetAllSearchedUsers(value) },[searchedValue])

  return (
    <section className={styles.user_list}>
         <SearchBar/>
         <UserListItem/>
    </section>
  )
}

export default UserList