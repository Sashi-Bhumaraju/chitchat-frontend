import './App.css'
import UserList from './components/screens/UserList';
import UseSearchBar from './hooks/UseSearchBar';
import SearchBar from './hooks/UseSearchBar';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  const [SearchBar, value, reset] = UseSearchBar('search user');
  return (
      <section className='app'>
          <RoutesComponent/>
          {/* <UserList/> */}
      </section>
  )
}

export default App
