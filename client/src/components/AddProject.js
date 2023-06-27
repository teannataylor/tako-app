import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProject({ developer, onProjectAdd }) {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Fetch developers data
    fetch('/developers')
      .then((response) => response.json())
      .then((data) => setDevelopers(data))
      .catch((error) => console.error('Error fetching developers:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking if developer is an admin
    const isAdmin = developer.is_admin;

    if (!isAdmin) {
      console.log('Only admins can submit new projects.');
      return;
    }

    const newProject = {
      name,
      description,
      due_date: dueDate,
    };

    // Perform the project submission
    fetch('/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project: newProject }), // Wrap the newProject object in a "project" key
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the response as JSON
        } else {
          throw new Error('Project submission failed.');
        }
      })
      .then((createdProject) => {
        setIsSubmitted(true);
        onProjectAdd(createdProject);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error submitting project:', error);
      });
  };

  if (!developer.is_admin) {
    return <div>UnAuthorized: Only Admins Can Submit Projects!</div>;
  }

  if (isSubmitted) {
    return <div>Project Submitted Successfully!</div>;
  }

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
}

export default AddProject;
