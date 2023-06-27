import {useState} from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import NavBar from './NavBar';
// import { FaOctopusDeploy } from "react-icons/fa";
// import {Link} from 'react-router-dom';

// this will be the Login Page 

function Homepage({onLogin}) {
    const [showLogin,setShowLogin] = useState(true)
  
    return (
    <div id='login'>
      <NavBar/>
       <h1>Welcome to Tako!</h1>
       <br/>
      
      <br/>
      {showLogin ? (
            <>
            <LoginForm onLogin={onLogin}/>
            <p>Don't have an account?</p>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </>
        ) : (
            <>
            <SignUp onLogin={onLogin}/>
            <p>Already have an account?</p>
            <button onClick={() => setShowLogin(true)}>Log In</button>
            </>
        )}
   
   
    </div>
   
  )
}

export default Homepage