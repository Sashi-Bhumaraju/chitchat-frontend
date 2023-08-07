import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { GetContactsListOfUserQuery, getAllContactsOfuser } from '../store';
import UseCollectionData from '../hooks/UseCollectionData';

function ContactsBridge() {
    const [getContacts, isLoading, error] = UseCollectionData(GetContactsListOfUserQuery());
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllContactsOfuser(getContacts))
    },[getContacts])
}

export default ContactsBridge