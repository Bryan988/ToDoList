import logo from './logo.svg';
import './App.css';
import React from "react";
import TaskList from "./components/TaskList";

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p>{this.state.apiResponse}</p>
            <h2>ToDoList</h2>
            <TaskList name="toDoList" tasks={["Test"]}></TaskList>
          </header>
        </div>
    );
  }
}

export default App;
