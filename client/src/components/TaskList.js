import React from 'react'

function TaskList({task}) {

  console.log(task, 'wowowo')

  return (
    <div>
       <h1>Task:</h1>
      <br/>
      <h2>{task.name}</h2>
      <br/>
      <h2>Description:{task.description}</h2>
      <br/>
      <h2>Due Date:{task.due_date}</h2>
      <br/>
      <h2>Completed:{task.is_completed ? 'Yes' : 'No'}</h2>
      <br/>
      <button>Edit</button>
      <button>Delete</button>
      <button>View Notes</button>
    </div>
  )
}

export default TaskList

// "id": 1,
//                 "name": "Dolorem vitae delectus voluptates.",
//                 "description": "abcbsibwe",
//                 "due_date": "2024-01-13",
//                 "is_completed": true