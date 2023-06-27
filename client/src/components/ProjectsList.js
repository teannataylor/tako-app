import React from 'react'
import ProjectCard from "./ProjectCard"

function ProjectsList({projects}) {
  console.log(projects, "full array?")

  return (
    <div>

       <div>
        {projects.map((project) => {
          return <ProjectCard key={project.id} name={project.name} id={project.id}/>
        })}

       </div>
       </div>
  )
}

export default ProjectsList