import { useState } from 'react'
import './App.css'
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import  { useCollectionData } from "react-firebase-hooks/firestore";
import { Firestore, limit } from 'firebase/firestore';
import { collection, query, where, getDocs  } from "firebase/firestore";
import { auth, db } from "./firebase-config";

function App() {

  

  const q = query(collection(db, "chat"), where("sendid", "in", ["1234"]), where("id", "in", ["1"]),limit(5));
  const [messages] = useCollectionData(q, { idField: 'id' });
  
  const user = useSelector((store => store.user.data));
  


const getUsers = async () => {
   
  // try {
  //   const users = [];
  //   let listUsersResult = await auth.listUsers();

  //   listUsersResult.users.forEach((userRecord) => {
  //     users.push(userRecord.toJSON());
  //     console.log(userRecord.toJSON())
  //   });

  //   // If there are more users to fetch, continue fetching in batches
  //   while (listUsersResult.pageToken) {
  //     listUsersResult = await auth.listUsers(listUsersResult.pageToken);
  //     listUsersResult.users.forEach((userRecord) => {
  //       users.push(userRecord.toJSON());
  //     });
  //   }

  //   return users;
  // } catch (error) {
  //   console.error('Error fetching users:', error);
  //   throw error;
  // }

}













  console.log(user);
  return (
    <>
      <section className='app'>
           {/* <button onClick={handleClick}>sign in with google</button> */}
          {user? <Home></Home> :  <Auth></Auth> }
          { messages && messages.map((m,i)=>{
           return <li key={i}>{ JSON.stringify(m)}</li>
          })}
          <button onClick={getUsers}>get all users</button>
      </section>
    
    </>
  )
}

export default App
