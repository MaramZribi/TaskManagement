// TaskList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import taskService from '../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Récupérez la liste des tâches depuis le service
    const fetchData = async () => {
      const data = await taskService.getAllTasks();
      setTasks(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.code}>
            <Link to={`/tasks/${task.code}`}>{task.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

