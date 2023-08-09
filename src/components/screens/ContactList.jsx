import React, { useEffect } from 'react'
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
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ContactsBridge from '../../bridge/ContactsBridge';
// import { onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { CollectionReference, and, collection, doc, getDoc, getDocs, limit, onSnapshot, or, orderBy, query, startAfter, startAt, where } from "firebase/firestore";
import { LocalStorageGet } from '../../util/LocalStorage';
import UseIsMobile from '../../hooks/UseIsMobile';

function ContactList() {
  
 
  const getContacts = useSelector((state)=>state.contact.data); 
  const contactListUsers  = getContacts && getContacts.map((data)=>{ const contact = GetContactListUser(data);  return <ContactListItem key = {nanoid()}  contact = {contact}/> });
  const user = useSelector((state)=>state.user.data)     
  const navigate = useNavigate();     
  const currentLoaction =   useLocation().pathname  
  const isMobile = UseIsMobile()

  const displayProfile = () => {    
        navigate(currentLoaction +"/"+ user.user_id)     
  }      

  const searchUser = () => {    
      if(isMobile)  navigate("/home/s/search_user") 
      else   navigate(currentLoaction +"/search_user")      
  }    

  // useEffect(()=>{
  //   const user = LocalStorageGet("chitchat.user");
  //   const ContactsCollectionRef = collection(db,"contacts"); 
  //    const q = query( ContactsCollectionRef, orderBy("timestamp","desc"), or( where('user_id_1','==',user.user_id), where('user_id_2','==',user.user_id) ) );  
  //     getDocs( q)
  //   const unsubscribe = onSnapshot(GetContactsListOfUserQuery(), (snapshot) => {
  //     var listOfResponseRows = snapshot.docs.map((doc) => { 
  //         // return  { id: doc.id, ...doc.data() }
  //     });
  // },
  // (error)=>(error));
  // })


  return (    
    <section className={styles.contact_list}>    
        <AppBar name={"ChitChat"} rightImageUrl={user.photo_url} click={displayProfile}/>      
         {!getContacts && <ContactListSkeleton/>}       
         {getContacts && contactListUsers}      
         <div className={styles.add_friend} onClick={searchUser}>  <BiMessageSquareAdd/> </div>    
         {isMobile && <Outlet/>}
    </section>      
  )  
} 

export default ContactList

