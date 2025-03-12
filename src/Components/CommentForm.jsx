import { useForm } from "react-hook-form"

const CommentForm = ({task, callbackPostComment}) => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const postComment = (data) => {
        callbackPostComment(data);
    }
    return (
        <>
        <form onSubmit={handleSubmit(postComment)}>
            <input {...register('comment')} type="text" placeholder="Unesite Vas komentar" />
            <input {...register('taskId')} type="hidden" defaultValue={task.id} />
            <button>Post Comment</button>
    </form>
    </>
    )
}

export default CommentForm;