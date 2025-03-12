import { useRecoilValue, useSetRecoilState } from "recoil";
import { tasksState } from "../States/tasksState";


const GetAllCommentsForPost = ({comments, taskId}) => {

    const taskData = useRecoilValue(tasksState);
    const setTaskData = useSetRecoilState(tasksState);

    const deleteComment =(comment, taskId) => {
        console.log(comment, taskId);

        const taskWithComments = taskData.map(task => {
            if(task.id === parseInt(taskId)) {
              const updatedComments = task.comments.filter(taskComment => taskComment !== comment);
              console.log(updatedComments);
              return {
                ...task,
                comments: updatedComments
              }
                
              
            } 
            return task;
        });
        setTaskData(taskWithComments);
    }
    return(
        <>
       {comments.map((comment) => (
        <div key={comment}>
            <p>{ comment }</p>
            <button onClick={() => deleteComment(comment, taskId)}>Delete comment</button>
        </div>
       ))}
        </>
    )
}

export default GetAllCommentsForPost;