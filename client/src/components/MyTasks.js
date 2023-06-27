import React from 'react'

function MyTasks({developer}) {
    const developerTasks = developer.tasks
    console.log(developerTasks)

    return (
        developerTasks.map((task) => {
            return (
                <div key={task.id}>
                <h1>{task.name}</h1>
                <p>{task.due_date}</p>

                <p>Task Status: {task.is_completed ? 'Incomplete' : 'Completed'}</p>
                <button>Edit Task</button>
                <button>Delete Task</button>
                </div>
            )
        })
       
    )
}
export default MyTasks

// description

// due_date

// id
// : 
// 1
// is_completed
// : 
// true
// name
