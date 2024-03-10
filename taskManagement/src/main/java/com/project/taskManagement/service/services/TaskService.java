package com.project.taskManagement.service.services;
import java.util.List;

import com.project.taskManagement.entity.Task;

public interface TaskService {

	public List<Task> allTask();
	
	public Task SingleTask(Long id);
	
	public Task addTask(Task task);
	
	public Task updateTask(Long id,Task task);
	
	public Task updateIsDone(Long id);
	
	public String deleteTask(Long id);
}