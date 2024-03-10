import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const AllTask = () => {
    const { tasks } = useSelector(state => state.tasks);

    return (
        <div className='container col-8 my-3'>
            <h3 className='h3 px-3'>All Task</h3>
            <div className="container-fluid bg-trasparent my-4 p-3 py-1">
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
                    {tasks.map((task) => {
                        return <Task task={task} key={task.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllTask;