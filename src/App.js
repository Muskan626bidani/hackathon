import './App.css';
import InnerPage from './components/InnerPage';
import Login from './components/Login';
import UserState from './context/users/userState';
import Loginpage from './components/Loginpage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <Router>
    <UserState>
<<<<<<< HEAD
      <Login />
      {/* <InnerPage/> */}
=======
    
     <Routes>
        <Route path='' element={<Login />} />
        <Route path='/innerPage' element={<Loginpage />} />
      </Routes>
>>>>>>> 15059997992a5e6a7e0e59d0731ab7af472990ed
    </UserState>
    </Router>
    )
  }

export default App;
