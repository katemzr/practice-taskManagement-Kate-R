

const TaskList = ({taskData}) => {
    return (
        <div className="taskList">
            <h1>TaskList</h1>
            <ul>
                {taskData.map}
            </ul>
        </div>
    )
}