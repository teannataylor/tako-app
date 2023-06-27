import React from 'react';
import { Link } from 'react-router-dom';



// list of projects & list of tasks -- maybe a diagram of where the tasks currently sit?
// edit personal profile info? should i include an avatar ??
function Dashboard({developer, projects}) {
  

  return (
    <div>
     <div>
      <h1>Hello, {developer.name}!</h1>
      <h2>Team Projects:</h2>
      <Link to="/projects/new"><button>Add Project</button></Link>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <button>Edit Project</button>
          <button>Delete Project</button>
        </div>
      ))}
    </div>
    
      
    </div>
  )
}

export default Dashboard