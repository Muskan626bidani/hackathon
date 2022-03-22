import './App.css';
import InnerPage from './components/InnerPage';
import Login from './components/Login';
import UserState from './context/users/userState';
import Loginpage from './components/Loginpage';
import Admin from './components/Admin';
import Form from './components/Form';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
     <UserState>    
      <Routes>
         <Route path='' element={<Login />} />
         <Route path='/Admin' element={<Admin />} />
       </Routes>
     </UserState>
     </Router>
    // <Form />
    )
  }

export default App;

