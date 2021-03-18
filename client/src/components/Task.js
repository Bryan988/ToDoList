import React, {useState} from 'react';

function Task(props){
    const [task] = useState(props.task);
    const [update,setUpdate] = useState(false);


    /*if(update){
        return(
                <input type="text" value={task.title} onChange={handleChange}/>
        )
    }else{*/
        return (
                <li id={task.id}> {task.title}</li>
        )
    //}

}
export default Task;