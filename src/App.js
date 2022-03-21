import './App.css';
import Login from './components/Login';
import UserState from './context/users/userState';
import Loginpage from './components/Loginpage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <Router>
    <UserState>
    
     <Routes>
        <Route path='' element={<Login />} />
        <Route path='/innerPage' element={<Loginpage />} />
      </Routes>
    </UserState>
    </Router>
    )
  }

export default App;
