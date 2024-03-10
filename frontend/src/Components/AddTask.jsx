import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./css/addTask.css";
import { createTask } from "../slice/TaskSlice/TaskSlice";

const AddTask = () => {
    const [taskDetails, setTaskDetails] = useState({
        title: "",
        desc: ""
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTaskDetails((initState) => ({ ...initState, [e.target.name]: e.target.value }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTask(taskDetails));
        setTaskDetails({
            title: '',
            desc: ''
        })
    }

    return (
        <div className='add-task-container col-3 p-3 my-4'>
            <div className="heading text-center my-3">
                <h3>Add Task</h3>
            </div>
            <form className='task-add-from' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Titile</label>
                    <input
                        type="text"
                        value={taskDetails.title}
                        onChange={handleChange}
                        name='title'
                        placeholder='Enter Title of Task'
                        className="form-control"
                        id="titleInput"
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Task Description</label>
                    <textarea
                        className="form-control"
                        name='desc'
                        placeholder='Enter Description'
                        value={taskDetails.desc}
                        onChange={handleChange}
                        id="task-desc"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask