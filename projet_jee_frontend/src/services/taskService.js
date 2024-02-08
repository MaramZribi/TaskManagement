// taskService.js
import axios from 'axios';

const TASK_BASE_URL = 'http://localhost:8080/Examen2/TaskService';

const taskService = {
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${TASK_BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  },

  getTaskByCode: async (code) => {
    try {
      const response = await axios.get(`${TASK_BASE_URL}/tasks/${code}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching task details:', error);
      return {};
    }
  },

  addTask: async (task) => {
    try {
      const response = await axios.post(`${TASK_BASE_URL}/tasks/add`, task);
      return response.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  removeTask: async (code) => {
    try {
      const response = await axios.delete(`${TASK_BASE_URL}/tasks/delete/${code}`);
      return response.data;
    } catch (error) {
      console.error('Error removing task:', error);
      throw error;
    }
  },

  updateTask: async (task) => {
    try {
      const response = await axios.put(`${TASK_BASE_URL}/tasks/update/${task.code}`, task);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },
};

export default taskService;
