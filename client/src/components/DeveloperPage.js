import React from 'react'


// list of all developers?? maybe -- button to split developers by teams?
function DeveloperPage({allDevelopers}) {
  return (
    <div>
    <h1>TakoAppi Developers:</h1>
    {allDevelopers.map((developer) => (
      <div key={developer.id}>
        <h2>{developer.name}</h2>

      </div>
    ))}
  </div>
  )
}

export default DeveloperPage