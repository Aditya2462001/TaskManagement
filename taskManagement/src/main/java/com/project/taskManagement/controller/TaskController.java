package com.project.taskManagement.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.taskManagement.entity.Task;
import com.project.taskManagement.service.services.TaskService;


@RestController
@RequestMapping(path="/api/v1")
@CrossOrigin
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	
	@GetMapping(path ="/all-task")
	public List<Task> allTasks(){
		return taskService.allTask();
	}
	
	@GetMapping(path="/task/{id}")
	public Task oneTask(@PathVariable Long id) {
		return taskService.SingleTask(id);
	}
	
	@PostMapping(path="/task/create")
	public Task createTask(@RequestBody Task task) {
		return taskService.addTask(task);
	}
	
	@PutMapping(path="/task/update/{id}")
	public Task updateTask(@PathVariable Long id,@RequestBody Task task) {
		return taskService.updateTask(id, task);
	}
	
	@PatchMapping(path="/task/update/isDone/{id}")
	public Task updateTaskAsIsDone(@PathVariable Long id) {
		return taskService.updateIsDone(id);
	}
	
	@DeleteMapping(path="/task/delete/{id}")
	public String deleteTask(@PathVariable Long id) {
		return taskService.deleteTask(id);
	}
}