import React from 'react'
import {Link} from 'react-router-dom'


//map through projects
// add a note/task form
function ProjectCard({name,id}) {
  console.log(name, id)
  return (
    <div>
      <p className='font-bold font-serif'>{name} </p>
      <Link to={`http://localhost:4000/projects/`+ id}><button className='font-serif'>View</button> </Link>
    </div>
  )
}

export default ProjectCard