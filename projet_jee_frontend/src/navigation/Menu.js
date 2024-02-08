// Menu.js
import React from 'react';
import Accueil from '../components/Home';
import ListProjects from '../components/ProjectList';  
import ListTasks from '../components/TaskList'; 
import ProjectForm from '../components/ProjectForm';
import TaskForm from '../components/TaskForm';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function Menu() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/accueil">Accueil</Link></li>
          <li><Link to="/projets">Liste des projets</Link></li>
          <li><Link to="/taches">Liste des tâches</Link></li>
          <li><Link to="/ajouter-projet">Ajouter un projet</Link></li>
          <li><Link to="/ajouter-tache">Ajouter une tâche</Link></li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path='/accueil' element={<Accueil />} />
          <Route path='/projets' element={<ListProjects />} />
          <Route path='/taches' element={<ListTasks />} />
          <Route path="/ajouter-projet" element={<ProjectForm />} />
          <Route path="/ajouter-tache" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;
