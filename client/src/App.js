import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import  axios from "axios"
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {

    const [apiResponse,setapiResponse] = useState([])

    useEffect( () => {
        axios.get("http://localhost:9000/testAPI")
            .then(res => {
                setapiResponse(res.data.data)
            })
            .catch(e =>{
                console.log(e)
            })
    },[setapiResponse]);

    const addTask = (newTask)=>{
        //addNewTask to DB
        axios.post("http://localhost:9000/testAPI",{
            data:apiResponse,
            newTask:newTask
        }).then(response =>{
          setapiResponse([...apiResponse,{id:response.id, title: newTask}])
        })


        //Get the id
        // setapiResponse
    }
    return (
      <div>
          <div>
              <h2>ToDoList</h2>
              <ul>
                  {apiResponse.map(t=> <Task title={t.title}/>)}
              </ul>
              <TaskForm addNewTask={addTask}/>

          </div>


      </div>
    );

}

export default App;
