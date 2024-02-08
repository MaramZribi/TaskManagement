// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [taskData, setTaskData] = useState({
    code: '',
    description: '',
    startDate: '',
    endDate: '',
    project: '', // Ajoutez des champs supplémentaires si nécessaire
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez la logique pour soumettre les données de la tâche au backend
    onSubmit(taskData);
    // Réinitialisez le formulaire après la soumission
    setTaskData({
      code: '',
      description: '',
      startDate: '',
      endDate: '',
      project: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Code de la tâche:
        <input type="text" name="code" value={taskData.code} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description de la tâche:
        <input type="text" name="description" value={taskData.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date de début de la tâche:
        <input type="date" name="startDate" value={taskData.startDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date de fin de la tâche:
        <input type="date" name="endDate" value={taskData.endDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Projet associé:
        <input type="text" name="project" value={taskData.project} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Ajouter la tâche</button>
    </form>
  );
}

export default TaskForm;
