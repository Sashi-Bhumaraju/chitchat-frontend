import React, { useEffect } from 'react'

function NotificationAlert() {

  useEffect(()=>{
    Notification.requestPermission().then((parm)=>{
      if( parm === "granted")  {
       const notification =  new Notification("you got a messasge",{
          body: 'helooooo',
          data: { data : "this is data for further use" },
          icon : "../../public/logo.png"
        });
      } 

      // notification.addEventListener("click",e=>{

      // })
    })
  })  
  return (
    <div>Notification</div>
  )
}

export default NotificationAlert