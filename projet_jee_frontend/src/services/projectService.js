// projectService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Examen2/ProjectService';

const projectService = {
  getAllProjects: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  getProjectByCode: async (code) => {
    try {
      const response = await axios.get(`${BASE_URL}/projects/${code}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching project details:', error);
      return {};
    }
  },

  addProject: async (project) => {
    try {
      const response = await axios.post(`${BASE_URL}/projects/add`, project);
      return response.data;
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  },

  removeProject: async (code) => {
    try {
      const response = await axios.delete(`${BASE_URL}/projects/delete/${code}`);
      return response.data;
    } catch (error) {
      console.error('Error removing project:', error);
      throw error;
    }
  },

  updateProject: async (project) => {
    try {
      const response = await axios.put(`${BASE_URL}/projects/update/${project.code}`, project);
      return response.data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },
};

export default projectService;
