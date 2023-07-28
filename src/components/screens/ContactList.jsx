import React, { useEffect } from 'react'
import UseThunk from '../../hooks/UseThunk'
import { GetAllContacts, GetContactsListOfUserQuery } from '../../store'
import { useSelector } from 'react-redux';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ContactList() {
  
  const [getContacts] =  useCollectionData(GetContactsListOfUserQuery(), { idField: 'id' });

  console.log(getContacts)
  if(!getContacts) return "loading";
  return (
    <div>{JSON.stringify(getContacts)}</div>
  )
}

export default ContactList