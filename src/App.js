import './App.css';
import Login from './components/Login';
import UserState from './context/users/userState';

function App() {
  return (
    <>
    <UserState>
      <Login />
    </UserState>
    </>
  );
}

export default App;

