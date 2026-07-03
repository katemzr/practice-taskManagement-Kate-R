import { Link, useParams } from "react-router"



const TaskDetail = ({taskData}) => {
    const {taskid}=useParams();
    const task = taskData.find((task) => String(task.id) === taskid);
    if (!task) {
        return 
        <div>
            <p>Task not found. Sorry!</p>
            <Link to={'/'}>BACK</Link>
        </div>
    }
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <Link to={'/'}>BACK</Link>
        </div>
    );
}

export default TaskDetail;