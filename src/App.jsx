import './App.css'
import  { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where, getDocs  } from "firebase/firestore";
import RoutesComponent from './routes/RoutesComponent';
import { GetTimeStamp } from './util/GetTimeStamp';
import UserListItem from './components/widgets/UserListItem';
import UserList from './components/screens/UserList';
import ContactList from './components/screens/ContactList';
// import GetTimeStamp from './util/GetTimeStamp';

function App() {

  

  // const q = query(collection(db, "chat"), where("sendid", "in", ["1234"]), where("id", "in", ["1"]),limit(5));
  // const [messages] = useCollectionData(q, { idField: 'id' });

  return (
    <>
      <section className='app'>
          {/* { messages && messages.map((m,i)=>{
           return <li key={i}>{ JSON.stringify(m)}</li>
          })}
          <button onClick={getUsers}>get all users</button> */}
          {/* { JSON.stringify(GetTimeStamp())} */}
          <RoutesComponent></RoutesComponent>
          {/* <UserListItem/> */}
          {/* <UserList/> */}
          {/* <ContactList/> */}
      </section>
    
    </>
  )
}

export default App
