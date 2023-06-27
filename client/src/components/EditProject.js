import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

//this should auto populate with the developers information
function EditProject({onProjectUpdate}) {
 
const {id} = useParams();
const [currentData, setCurrentData] = useState("")
const [isFormVisible, setIsFormVisible] = useState(false);

useEffect(() =>
{
  fetch(`http://localhost:3000/projects/${id}`)
  .then(r => r.json())
  .then(data => {
      setCurrentData(data)
  })


},[])


function handleChange(e){
  const key = e.target.name
  setCurrentData({
      ...currentData,
      [key]: e.target.value

  })
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/projects/${id}`,{
        method: "PATCH",
        headers:{
            "Content-type" : "application/json"
        },

        body: JSON.stringify(currentData)
    }) //go to backend here
        .then(r => {
            console.log(r)
            return r.json()})
        .then((updatedProject) =>{
            onProjectUpdate(updatedProject)
        })

    setIsFormVisible(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.name}
        type="text"
        name="name"
        placeholder="Project name"
      />
          <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.description}
        type="text"
        name="description"
        placeholder="Project Description"
      />
          <input
      className='border m-2 p-2'
        onChange={handleChange}
        value={currentData.due_date}
        type="date"
        name="dueDate"
        placeholder="Due Date"
      />

      </form>
    </div>
  )
}

export default EditProject

// t.string "name"
// t.text "description"
// t.date "due_date"
// type="date"
// id="dueDate"
// name="dueDate"
// value={dueDate}
// onChange={handleInputChange}