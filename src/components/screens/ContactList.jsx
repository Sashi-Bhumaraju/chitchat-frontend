import React from 'react'
import {  GetContactsListOfUserQuery } from '../../store'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ContactListItem from '../widgets/ContactListItem';
import styles from '../../css/ContactList.module.css'
import AppBar from '../widgets/AppBar';
import { GetContactListUser } from '../../util/GetContactListUser';
import { nanoid } from 'nanoid';
import ContactListSkeleton from '../skeletons/ContactListSkeleton';
import UseCollectionData from '../../hooks/UseCollectionData';
import { useSelector } from 'react-redux';
import { BiMessageSquareAdd } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom';
import ContactsBridge from '../../bridge/ContactsBridge';

function ContactList() {
  
  const getContacts = useSelector((state)=>state.contact.data); 
  const contactListUsers  = getContacts && getContacts.map((data)=>{ const contact = GetContactListUser(data);  return <ContactListItem key = {nanoid()}  contact = {contact}/> });
  const user = useSelector((state)=>state.user.data)     
  const navigate = useNavigate();     
  const currentLoaction =   useLocation().pathname  

  const displayProfile = () => {    
        navigate(currentLoaction +"/"+ user.user_id)     
  }      

  const searchUser = () => {    
        navigate(currentLoaction +"/search_user")      
  }    

  return (    
    <section className={styles.contact_list}>    
        <AppBar name={"ChitChat"} rightImageUrl={user.photo_url} click={displayProfile}/>      
         {!getContacts && <ContactListSkeleton/>}       
         {getContacts && contactListUsers}      
         <div className={styles.add_friend} onClick={searchUser}>  <BiMessageSquareAdd/> </div>    
    </section>      
  )  
} 

export default ContactList

