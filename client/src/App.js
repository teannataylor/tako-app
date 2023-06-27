import {Routes, Route} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import ProjectsList from "./components/ProjectsList";
import EditProject from "./components/EditProject";
import AddProject from "./components/AddProject";
import EditProfile from "./components/EditProfile";
import Container from "./components/Container";
import MyProjects from "./components/MyProjects";
import MyTasks from "./components/MyTasks";
import DeveloperPage from "./components/DeveloperPage";

function App() {
  const [developer, setDeveloper] = useState(null);
  const [projects, setProjects] = useState([])
  const [allDevelopers,setAllDevelopers]= useState([])


  useEffect(() =>{
    fetch("/projects")
    .then((r) => r.json())
    .then((projects) => setProjects(projects))
    .catch(error => console.log(error))
  }, [])


  useEffect(() =>{
    fetch("/developers")
    .then((r) => r.json())
    .then((devs) => setAllDevelopers(devs))
    .catch(error => console.log(error))
  },[])



  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((developer) => setDeveloper(developer));
      }
    });
  }, []);

  function onProjectAdd(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

 
  if (!developer) return <Homepage onLogin={setDeveloper}/>

  console.log(projects.tasks)

   //project update
   function onProjectUpdate(updatedProject){
    setProjects(projects.map(
      project => project.id === updatedProject.id ? updatedProject : project ))
  }

//might need to check
  return (
    <div className="App">
        <NavBar setDeveloper={setDeveloper}/>
        <main>
      <Routes>
       
        <Route  path="/" element={ <Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard developer={developer} projects={projects}/>}/>
        <Route path="/projects" element={<ProjectsList projects={projects} developer={developer}/>}/>
        <Route path="/projects/:id" element={<Container developer={developer} projects={projects}/>} />
        <Route path="/projects/new" element={<AddProject developer={developer} onProjectAdd={onProjectAdd}/>} />
        <Route path="projects/:id/edit" element={<EditProject onProjectUpdate={onProjectUpdate}/>}/>
        <Route path="/my-projects" element={<MyProjects developer={developer} />} />
        <Route path="/my-tasks" element={<MyTasks developer={developer} />} />
        <Route path="/developers" element={<DeveloperPage allDevelopers={allDevelopers}/>} /> 
        <Route path="me/profile/edit" element={<EditProfile developer={developer}/>} /> 
      </Routes>
      </main>
    </div>
  );
}

export default App;

// /developers/:developer_id/tasks(.:format)