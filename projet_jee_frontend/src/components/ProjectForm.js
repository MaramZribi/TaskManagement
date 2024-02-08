// ProjectForm.js
import React, { useState } from 'react';

function ProjectForm({ onSubmit }) {
  const [projectData, setProjectData] = useState({
    code: '',
    description: '',
    startDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez la logique pour soumettre les données du projet au backend
    onSubmit(projectData);
    // Réinitialisez le formulaire après la soumission
    setProjectData({
      code: '',
      description: '',
      startDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Code du projet:
        <input type="text" name="code" value={projectData.code} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description du projet:
        <input type="text" name="description" value={projectData.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date de début du projet:
        <input type="date" name="startDate" value={projectData.startDate} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Ajouter le projet</button>
    </form>
  );
}

export default ProjectForm;
