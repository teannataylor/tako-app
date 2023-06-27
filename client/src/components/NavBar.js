import React from 'react'
import { FaOctopusDeploy } from "react-icons/fa";
import "./Styles/NavBarStyle.css";
import { NavLink } from "react-router-dom";


//this should be the navigation bar for homepage - see tasks -- see projects? 
//implement a search bar 

// nav links: my projects, my notes, my tasks, all , edit profile, logout button
function NavBar({setDeveloper}) {
    
      const iconStyle = {
      fontSize: '30px',
      color: 'white',
      paddingRight: '8px',
    }

    function handleLogout(){
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setDeveloper(null);
        }
    });
    }
  
 

  return (
    <nav>
      <a><FaOctopusDeploy style={iconStyle}/>TakoAppi</a>
      <ul id="navbar">
        <li><NavLink to='/dashboard'>Home</NavLink></li>
        <li><NavLink to='/my-projects'> My Projects</NavLink></li>
        <li><NavLink to='/my-tasks'>My Tasks</NavLink></li>
        <li><NavLink to='/developers'>Team</NavLink></li>
        <li><NavLink to='/me/profile/edit'>Profile</NavLink></li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
    </nav>
    
    
  )
}

export default NavBar