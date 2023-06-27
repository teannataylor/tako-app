import React from 'react';


function MyProjects({developer}) {
    const developerProjects = developer.projects
    console.log(developerProjects)

    return (
        developerProjects.map((proj) => {
            return (
                <div key={proj.id}>
                <h1>{proj.name}</h1>
                <p>{proj.due_date}</p>
                <button>View Tasks</button>
                </div>
            )
        })
       
    )
}

export default MyProjects