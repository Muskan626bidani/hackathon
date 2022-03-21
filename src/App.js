import './App.css';
import InnerPage from './components/InnerPage';
import Login from './components/Login';
import UserState from './context/users/userState';

function App() {
  return (
    <>
    <UserState>
      <Login />
      {/* <InnerPage/> */}
    </UserState>
    </>
  );
}

export default App;
