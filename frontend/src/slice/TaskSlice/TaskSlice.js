import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./TaskSliceService/taskSliceService";

const initialState = {
    tasks: [],
    isSuccess: false,
    isError: false,
    message: ""
}

export const getAllTask = createAsyncThunk("get-all-task", (thunkAPI) => {
    try {
        return taskService.getAllTask();
    } catch (err) {
        return err.message;
    }
})

export const createTask = createAsyncThunk("create-task", (task, thunkAPI) => {
    try {
        return taskService.addTask(task);
    } catch (err) {
        return err.message;
    }

})

export const updateIsDone = createAsyncThunk("update-is-done", (id, thunkAPI) => {
    try {
        return taskService.updateIsDone(id);
    } catch (err) {
        return err.message;
    }
})

export const updateTheTask = createAsyncThunk("update-the-task", (data, thunkAPI) => {
    try {
        return taskService.updateTheTask(data.id, data.task);
    } catch (err) {
        return err.message;
    }
})

export const deleteTask = createAsyncThunk("delete-task", (id, thunkAPI) => {
    try {
        return taskService.deleteTask(id);
    } catch (err) {
        return err.message;
    }
})

export const taskSlice = createSlice({
    name: "task-slice",
    initialState,
    reducers: {
        resetState: (state) => {
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTask.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.isSuccess = true
                state.message = "all the task is get"
            })
            .addCase(getAllTask.rejected, (state) => {
                state.isError = true
                state.message = "something went wrong!"
            })

            .addCase(createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
                state.isSuccess = true
                state.message = 'created new task';
            })
            .addCase(createTask.rejected, (state) => {
                state.isError = true
                state.message = 'something went wrong!'
            })


            .addCase(updateIsDone.fulfilled, (state, action) => {
                const singleTask = state.tasks.findIndex((e) => e.id === action.payload.id);
                state.tasks[singleTask] = action.payload
                state.isSuccess = true
                state.message = 'Task is updated';
            })
            .addCase(updateIsDone.rejected, (state) => {
                state.isError = true
                state.message = 'something went wrong!'
            })

            .addCase(updateTheTask.fulfilled, (state, action) => {
                const singleTask = state.tasks.findIndex((e) => e.id === action.payload.id);
                state.tasks[singleTask] = action.payload
                state.isSuccess = true
                state.message = 'Task is updated';
            })
            .addCase(updateTheTask.rejected, (state) => {
                state.isError = true
                state.message = 'something went wrong!'
            })

            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter((e) => e.id !== action.payload.id);
                state.isSuccess = true
                state.message = 'Delete the task';
            })
            .addCase(deleteTask.rejected, (state) => {
                state.isError = true
                state.message = 'something went wrong!'
            })
    }
})

export const { resetState } = taskSlice.actions;

export default taskSlice.reducer;