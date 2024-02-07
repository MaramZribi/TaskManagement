package com.examen.metier.interfaces;

import java.util.List;

import com.examen.entities.Project;
import com.examen.entities.Task;

import jakarta.ejb.Local;

@Local
public interface ProjectDao {
	List<Project> getAllProjects();
	void createProject(Project project);
	void addTaskToProject(Task t);
	void removeTaskFromProject(Task t);
	void updateProject(Project project);
	Project removeProject(String code);
	Project getProjectByCode(String codeProjet);
}
