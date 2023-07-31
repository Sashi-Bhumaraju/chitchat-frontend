import React from 'react'
import {  GetContactsListOfUserQuery } from '../../store'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ContactListItem from '../widgets/ContactListItem';
import styles from '../../css/ContactList.module.css'
import AppBar from '../widgets/AppBar';
import { GetContactListUser } from '../../util/GetContactListUser';
import { nanoid } from 'nanoid';
import ContactListSkeleton from '../skeletons/ContactListSkeleton';

function ContactList() {
  
  const [getContacts, isLoading, error] =  useCollectionData(GetContactsListOfUserQuery(), { idField: 'id' });
  const contactListUsers  = getContacts && getContacts.map((data)=>{ const contact = GetContactListUser(data); console.log(contact); return <ContactListItem key = {nanoid()}  contact = {contact}/> });

  return (
    <section className={styles.contact_list}>
        <AppBar name={"ChitChat"}/>
         {!getContacts && <ContactListSkeleton/>}
         {getContacts && contactListUsers}
    </section>
  )
  
}

export default ContactList

