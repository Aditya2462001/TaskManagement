import React from "react";
import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import UpdateTask from "../Components/UpdateTask";
import '../Components/css/update.css';

const Update = () => {
    const params = useParams();

    return (
        <>
            <Navbar buttonName={'Back To Home'} />
            <div className="container update-task-container my-3">
                <UpdateTask taskId={params.id} />
            </div>
        </>
    )
}

export default Update;