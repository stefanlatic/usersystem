import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from "../States/tasksState";


export const CreateTasks = () => {

    const [taskName, setTaskName] = useState();

    const setTasks = useSetRecoilState(tasksState);

    const createTask = () => {
        setTasks(oldTasks => [...oldTasks, taskName]);
    };

    return(
         <>
    <form>
        <input onInput={e => setTaskName(e.currentTarget.value)} type="text" placeholder="Enter title of task"/>
        <button type="button" onClick={createTask}> Create Task</button>
    </form>
    </>
    )
}