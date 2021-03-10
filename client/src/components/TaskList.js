import React, {useState} from 'react';
import Task from "./Task";
import TaskForm from "./TaskForm";


function TaskList(props){
    const [tasks,setTasks] = useState(props.tasks)

    const addTask =(newTask)=>{
        setTasks([...tasks,newTask])
    }

    return (
        <div>
            <ul>
                {tasks.map(t=> <Task title={t.title}/>)}
            </ul>
            <TaskForm addNewTask={addTask}/>
        </div>
    )
}
export default TaskList;