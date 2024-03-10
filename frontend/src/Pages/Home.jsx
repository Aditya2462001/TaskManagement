import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import AddTask from "../Components/AddTask";
import { getAllTask, resetState } from "../slice/TaskSlice/TaskSlice";
import AllTask from "../Components/AllTask";

const Home = () => {
    const { tasks } = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTask());
        return () => dispatch(resetState());
    }, []);

    return (
        <>
            <Navbar buttonName={'Good To See You'} />
            <div className="container w-100">
                <div className="row">
                    <AddTask />
                    {tasks.length !== 0 ? <AllTask /> : <p>Nothing to do!</p>}
                </div>
            </div>
        </>
    )
}

export default Home;