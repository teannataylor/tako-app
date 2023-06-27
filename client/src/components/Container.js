import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';

function Container({ developer, projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  const tasks = project.tasks.map((t) => <TaskList key={t.id} task={t} />);

  const deleteProject = () => {
    // Perform the project deletion
    fetch(`/projects/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Project deleted successfully.');
          // Redirect to the projects list page after successful deletion
          navigate('/projects');
        } else {
          throw new Error('Project deletion failed.');
        }
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  };

  const editProject = () => {
    console.log('This is an edit');
  };

  return (
    <div>
      <div className='text-center py-1 text-pink-400 font-serif'> Project: {project.name}</div>
      <br />
      <div className='text-center py-1 text-pink-400 font-serif'> Due Date:</div>
      <div className='text-center pb-4  px-2 font-serif'>{project.due_date}</div>
      <div className='text-center py-1 text-pink-400 font-serif'> Description:</div>
      <div className='text-center pb-4 px-2 font-serif'>{project.description}</div>
      <div className='items-center px-4 mx-auto'>
        <Link to={`http://localhost:4000/projects/${id}/edit`}>
          <button onClick={editProject}>Edit</button>
        </Link>
      </div>
      <div className='items-center px-4 py-1 mx-auto'>
        <button onClick={deleteProject}>Delete</button>
      </div>
      <div>{tasks}</div>
    </div>
  );
}

export default Container;
