// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './navigation/Menu';
// import Accueil from './components/Home';
// import ListProjects from './components/ProjectList';
// import ListTasks from './components/TaskList';
// import ProjectForm from './components/ProjectForm';
// import TaskForm from './components/TaskForm';

function App() {
  // Fonction pour gérer la soumission du formulaire de projet
  // const handleProjectSubmit = (projectData) => {
  //   // Logique pour envoyer les données du projet au backend
  //   console.log('Soumettre les données du projet:', projectData);
  // };

  // // Fonction pour gérer la soumission du formulaire de tâche
  // const handleTaskSubmit = (taskData) => {
  //   // Logique pour envoyer les données de la tâche au backend
  //   console.log('Soumettre les données de la tâche:', taskData);
  // };

  return (
    // <Router>
      <div>
        <Menu />
        {/* <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/home" element={<Accueil />} />
          <Route path="/projets" element={<ListProjects />} />
          <Route path="/taches" element={<ListTasks />} />
          <Route path="/ajouter-projet" element={<ProjectForm onSubmit={handleProjectSubmit} />} />
          <Route path="/ajouter-tache" element={<TaskForm onSubmit={handleTaskSubmit} />} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;

