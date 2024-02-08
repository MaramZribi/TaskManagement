// ProjectList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectService from '../services/projectService';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Récupérez la liste des projets depuis le service
    const fetchData = async () => {
      const data = await projectService.getAllProjects();
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des projets</h2>
      <ul>
        {projects.map(project => (
          <li key={project.code}>
            <Link to={`/projects/${project.code}`}>{project.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

