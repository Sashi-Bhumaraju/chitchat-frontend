import React, { useEffect } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { GetContactsListOfUserQuery } from '../store';
import { GetContactListUser } from '../util/GetContactListUser';
import { LocalStorageGet } from '../util/LocalStorage';

function UseNotification() {
    useEffect(() => {
        let unsubscribe; // Declare the unsubscribe function here
    
        if (Notification.permission === 'granted') {
          const query = GetContactsListOfUserQuery();
          unsubscribe = onSnapshot(query, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'modified') {
                const contact = GetContactListUser(change.doc.data());
                console.log(JSON.stringify(contact));
                const user = LocalStorageGet("chitchat.user");
                if( contact.recent_content_user_id !== user.user_id ){
                const notification = new Notification(contact.username, {
                  body: change.doc.data().recent_content,
                  data: { data: 'this is data for further use' },
                  icon: '../../public/logo.png',
                //   tag: change.doc.id, 
                });}
              }
            });
          });
        }
    
        // Clean up the listener when the component unmounts
        return () => {
          if (unsubscribe) {
            unsubscribe();
          }
        };
      }, []); // Empty dependency array ensures the effect runs only once
    
      return null; //
}

export default UseNotification