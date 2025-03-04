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
        {taskData.map(taskName => {
            return (
                <>
                <div key={taskName}>
                <p>{taskName}</p>
                <button onClick={() => deleteTask(taskName)} type="button">Delete Task</button>
                </div>
                </>
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