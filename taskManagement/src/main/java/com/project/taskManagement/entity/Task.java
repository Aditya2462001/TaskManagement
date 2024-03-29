package com.project.taskManagement.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tasks")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String title;
	
	@Column(name = "description")
	private String desc;
	
	private Boolean isDone = false;
	
	public Task() {
		
	}
	
	public Task(Long id, String title, String desc, Boolean isDone) {
		super();
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.isDone = isDone;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDesc() {
		return desc;
	}
	
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	public Boolean getIsDone() {
		return isDone;
	}
	
	public void setIsDone(Boolean isDone) {
		this.isDone = isDone;
	}
	
	@Override
	public String toString() {
		return "Task [id=" + id + ", title=" + title + ", desc=" + desc + ", isDone=" + isDone + "]";
	}
}