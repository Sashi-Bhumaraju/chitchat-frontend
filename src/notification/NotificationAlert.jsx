import React, { useEffect } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { GetContactsListOfUserQuery } from '../store';

function NotificationAlert (  ) {

     if( Notification.permission === "granted" ){
      onSnapshot(GetContactsListOfUserQuery(), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "modified") {
              console.log(JSON.stringify(change.doc.data().recent_content));
              const notification =  new Notification("you got a messasge",{
                body:   change.doc.data().recent_content,
                data: { data : "this is data for further use" },
                icon : "../../public/logo.png",
                tag:  "lk"

              });
          }
        });
      }); 
    }
      // notification.addEventListener("click",e=>{

      // })
  
}

function NotificationPermission () {
  Notification.requestPermission();
}

export  { NotificationPermission,NotificationAlert};