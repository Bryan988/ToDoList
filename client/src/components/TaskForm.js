import React, {useState} from 'react';

function TaskForm(props){
    const [newTask,setNewTask] = useState("");

    const handleChange = (event)=>{
        setNewTask(event.target.value);
    }
    const handleSubmit = (event)=>{
        console.log(newTask);
        props.addNewTask(newTask);
        setNewTask("");
    }

    return(
        <div>
            <input name="newTask" onChange={handleChange} type="text" value={newTask}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default TaskForm;