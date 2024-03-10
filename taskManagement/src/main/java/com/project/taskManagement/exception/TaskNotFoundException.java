package com.project.taskManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class TaskNotFoundException extends RuntimeException {

private static final long serialVersionUID = -324506152218672677L;

public TaskNotFoundException(String message) {
	super(message);
}
}