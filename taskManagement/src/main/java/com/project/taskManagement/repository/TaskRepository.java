package com.project.taskManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.taskManagement.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{

}