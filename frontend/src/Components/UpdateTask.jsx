import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./css/updateTask.css";
import { updateTheTask } from "../slice/TaskSlice/TaskSlice";

const UpdateTask = ({ taskId }) => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const [taskDetails, setTaskDetails] = useState({
        id: 0,
        title: '',
        desc: '',
        isDone: '',
    })

    useEffect(() => {
        setTaskDetails(tasks.filter((e) => e.id === parseInt(taskId))[0]);
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTaskDetails((initState) => ({ ...initState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const responseData = {
            id: taskId,
            task: {
                title: taskDetails.title,
                desc: taskDetails.desc
            }
        }
        dispatch(updateTheTask(responseData));
        navigate('/');
    }

    return (
        <div className='container update-container-main'>
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
                        className="form-control"
                        id="titleInput"
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Task Description</label>
                    <textarea
                        className="form-control"
                        name='desc'
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

export default UpdateTask;