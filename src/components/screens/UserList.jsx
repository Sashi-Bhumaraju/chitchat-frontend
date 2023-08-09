import React, { useEffect } from 'react';
import styles from '../../css/UserList.module.css'
import UseThunk from '../../hooks/UseThunk';
import { GetAllSearchedUsers, GetAllUsers } from '../../store';
import UserListItem from '../widgets/UserListItem';
import UseSearchBar from '../../hooks/UseSearchBar';
import { useSelector } from 'react-redux';

function UserList() {   

  const [runGetAllSearchedUsers, data, loading, error] = UseThunk(GetAllSearchedUsers);   
  const [SearchBar, searchedValue] = UseSearchBar('search user by email');  
  const currentUser = useSelector((state)=>{ return state.user.data })
  useEffect(()=>{ searchedValue.trim().length != 0 && runGetAllSearchedUsers(searchedValue) },[searchedValue])  
  const listOfusers =  data && data.map((user)=>{
    if( user.user_id !==  currentUser.user_id)
    return <UserListItem key={user.user_id} user = {user} />
    else
      return null; // Return null for the users you don't want to render
  })


  return (        
    <section className={styles.user_list}>      
         { SearchBar }  
        {listOfusers}
         {/* <UserListItem/>     */}
    </section>        
  )       

}     

export default UserList   