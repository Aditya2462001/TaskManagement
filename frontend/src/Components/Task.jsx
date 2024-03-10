import React from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./css/task.css";
import { deleteTask, updateIsDone } from "../slice/TaskSlice/TaskSlice";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <div className="card-body task-container-body">
                    <div className="clearfix mb-3">
                        {task.isDone ? (
                            <span className="float-end badge rounded-pill bg-success">Done</span>) : (
                            <button
                                className="btn float-end badge rounded-pill btn-primary"
                                onClick={() => dispatch(updateIsDone(task.id))}>Mark as Done</button>
                        )}
                    </div>
                    <h5 className='task-title'>{task.title}</h5>
                    <div className='card-desc-container'>

                    </div>
                    <p className="card-desc">
                        {task.isDone ? <del>{task.desc}</del> : <>{task.desc}</>}
                    </p>
                </div>
                <div className="bottom-action-container d-flex">
                    <div className="left-action-block flex-grow-1">
                        <Link to={`/update/${task.id}`}>Update</Link>
                    </div>
                    <div className="right-action-block flex-grow-1">
                        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task