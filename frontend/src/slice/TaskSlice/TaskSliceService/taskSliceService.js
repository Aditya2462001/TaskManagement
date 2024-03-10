import axios from "axios";

const API = "http://localhost:8080/api/v1"

const getAllTask = async () => {
    const response = await axios.get(API + "/all-task", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await response.data;
    return data;
}

const addTask = async (taskDetails) => {
    const response = await axios.post(API + "/task/create", taskDetails, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await response.data;
    return data;
}

const updateIsDone = async (id) => {
    const response = await axios.patch(API + `/task/update/isDone/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await response.data;
    return data;
}

const updateTheTask = async (id, task) => {
    const response = await axios.put(API + `/task/update/${id}`, task, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await response.data;

    return data;
}

const deleteTask = async (id) => {
    const response = await axios.delete(API + `/task/delete/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    const data = await response.data;

    return { data, id };
}

const taskService = {
    getAllTask,
    addTask,
    updateIsDone,
    updateTheTask,
    deleteTask
};

export default taskService;