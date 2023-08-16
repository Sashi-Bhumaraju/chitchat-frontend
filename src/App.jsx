import { useEffect } from 'react';
import './App.css'
import ContactsBridge from './bridge/ContactsBridge';
import UserList from './components/screens/UserList';
import UseSearchBar from './hooks/UseSearchBar';
import SearchBar from './hooks/UseSearchBar';
import { NotificationAlert, NotificationPermission } from './notification/NotificationAlert';

import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
      <section className='app'>
        <h1>hello</h1>
          <RoutesComponent/>
          {/* <UserList/> */}
      </section>
  )
}

export default App
