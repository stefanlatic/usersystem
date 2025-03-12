import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "../States/userState"
import { CreateTasks } from "./CreateTasks";
import { tasksState } from "../States/tasksState";
import { useEffect, useState } from "react";
import { categories } from "../Utils/Categories";
import { useForm } from "react-hook-form";
import CommentForm from "./CommentForm";
import GetAllCommentsForPost from "./GetAllCommentsForPost";

export const Tasks = () => {

    const userData = useRecoilValue(userState);
    const taskData = useRecoilValue(tasksState);
    const setTaskData = useSetRecoilState(tasksState);
    const [editTaskId, setEditTaskId] = useState();

          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm();
    
    const deleteTask = (taskId) => {
        const filteredTasks = taskData.filter(task => task.id !== taskId);
        setTaskData(filteredTasks);
    };

    const updateTask = (data) => {
        setEditTaskId(null)

        const updateTasks = taskData.map(task => {
            if(task.id === data.taskId) {
                return {
                    ...task,
                    name: data.taskName,
                    category: data.category,
                }
            }
        return task;
    })
    setTaskData(updateTasks);
};
    const newCommentPosted = (data) => {
        console.log(data);

        const taskWithComments = taskData.map(task => {
            if(task.id === parseInt(data.taskId)) {
            
              let existingComments = [];
                if(Array.isArray(task.comments)) {
                    existingComments = task.comments;
                }
                
            return {
                ...task,
                comments: [...(task.comments || []), data.comment]
            }  
        };
            return task;
        });

        setTaskData(taskWithComments);
        
    }

    useEffect(() => {
        if(editTaskId !== undefined) {
            const task = taskData.find(t => t.id === editTaskId);

            if(task) {
                reset({
                    taskId: task.id,
                    taskName: task.name,
                    category: task.category,
                })
            }
        }
    },  [editTaskId, reset, taskData]);

    return (
        <>
        <div>
            {userData.loggedIn && (
                <CreateTasks />
        )}
        </div>
        <div className="taskHolder">
            {userData.loggedIn && (
                 taskData.map (task => {
                    return (
                        <div className="singleTask" key={task.id}>
        
                            {editTaskId === task.id ? (
                                 <form className="taskUpdateForm" onSubmit={handleSubmit(updateTask)}>
                                 <input {...register('taskId')} type="hidden" defaultValue={task.id}></input>
                                 <input {...register('taskName')} type="text" defaultValue={task.name}></input>
                                 <select {...register('category')} defaultValue={task.category}>
                                    {categories.map(category => {
                                        return (
                                            <option key={category} value={category}> {category} </option>
                                        )
                                    })}
                                    </select>
                                    <button>Update Task</button>
                             </form>
                            ) : (
                                <div>
                                <h2 onClick={() => setEditTaskId(task.id)}>{task.name}</h2>
                                <p onClick={() => setEditTaskId(task.id)}>{task.category}</p>
                            <CommentForm task={task} callbackPostComment={newCommentPosted} />
                                <button onClick={() => deleteTask(task.id)} type="button">Delete Task</button>
                            </div>
                            )}
                            <GetAllCommentsForPost comments={task.comments} taskId={task.id} />
                    </div>
                    )
                })
            )}
       
        
    </div>
    </>
    )
}