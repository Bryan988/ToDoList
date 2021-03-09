import React, {useState} from 'react';

function Task(props){
    const [task,setTask] = useState(props.title);

    return(
        <li> {task}</li>
    )
}
export default Task;