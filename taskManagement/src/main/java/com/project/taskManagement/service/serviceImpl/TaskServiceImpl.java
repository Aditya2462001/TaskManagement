package com.project.taskManagement.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.taskManagement.entity.Task;
import com.project.taskManagement.exception.TaskNotFoundException;
import com.project.taskManagement.repository.TaskRepository;
import com.project.taskManagement.service.services.TaskService;

@Service
public class TaskServiceImpl implements TaskService {

@Autowired
private TaskRepository taskRepository;

@Override
public List<Task> allTask() {
	return taskRepository.findAll();
}

@Override
public Task SingleTask(Long id) {
	return taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException("Task Not Found!"));
}

@Override
public Task addTask(Task task) {
	Task createdTask = taskRepository.save(task);
	return createdTask;
}

@Override
public Task updateTask(Long id, Task task) {
	Task oldTask = SingleTask(id);
	if(oldTask != null) {
		oldTask.setDesc(task.getDesc());
		oldTask.setTitle(task.getTitle());
	}
	
	return taskRepository.save(oldTask);
}

@Override
public Task updateIsDone(Long id) {
	Task task = SingleTask(id);
	if(task != null) {
		task.setIsDone(true);
	}
	return taskRepository.save(task);
}

@Override
public String deleteTask(Long id) {
	Task task = SingleTask(id);
	taskRepository.delete(task);
	return String.format("Task is deleted of Id %d", id);
}
}