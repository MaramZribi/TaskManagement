// ProjectDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectService from '../services/projectService';

const ProjectDetails = () => {
  const { code } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    // Récupérez les détails du projet depuis le service
    const fetchData = async () => {
      const data = await projectService.getProjectByCode(code);
      setProject(data);
    };

    fetchData();
  }, [code]);

  return (
    <div>
      <h2>Détails du projet</h2>
      <p>Code: {project.code}</p>
      <p>Description: {project.description}</p>
      <p>Date de début: {project.startDate}</p>
      {/* Ajoutez ici d'autres détails du projet */}
    </div>
  );
};

export default ProjectDetails;
