import React, {useState} from 'react';

function Task(props){
    const [task] = useState(props.title);

    return(
        <li> {task}</li>
    )
}
export default Task;