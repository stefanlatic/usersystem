import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "../States/userState"
import { CreateTasks } from "./CreateTasks";
import { tasksState } from "../States/tasksState";

export const Tasks = () => {

    const userData = useRecoilValue(userState);
    const taskData = useRecoilValue(tasksState);
    const setTaskData = useSetRecoilState(tasksState);

    const deleteTask = (taskName) => {
        const filteredTasks = taskData.filter(task => task !== taskName);
        setTaskData(filteredTasks);
    };

    return (
        <>
        {taskData.map (task => {
            return (
                
                <div key={task.id}>
                    <p>{task.name}</p>
                    <p>{task.category}</p>
                    <button onClick={() => deleteTask(task.id)} type="button">Delete Task</button>
                </div>
                
            )
        })}
        {userData.loggedIn && (
            <div>
                <CreateTasks />
                <p>Tasks</p>
            </div>
        )}
    </>
    )
}