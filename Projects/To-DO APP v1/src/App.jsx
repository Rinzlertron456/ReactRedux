import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    task:"",
    deadline:new Date(),
  });
  const handleTaskChange=(e)=>{
    setTask({...task,[e.target.id]:e.target.value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await setTasks([...tasks,task]);
    setTask({task:"",deadline:""});
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i!== index));
  };
  return (
    <center className="container">
      <h1>TODO LIST</h1>
      <form onSubmit={(e)=>handleSubmit(e)} className="items-container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task Here"
              id="task"
              value={task.task}
              onChange={(e) => handleTaskChange(e)}
            />
            </div>
          <div className="col">
          <input
              type="date"
              className="form-control"
              placeholder="Enter DeadLine Here"
              id="deadline"
              value={task.deadline}
              onChange={(e)=>handleTaskChange(e)}
            />
          </div>
          <div className="col">
            <button className="btn btn-outline-success" 
            type="submit"
            >Add</button>
          </div>
          {tasks.map((element,index)=>{
            return (
              <div className="row" key={index}>
                <div className="col">
                  <p>{element.task}</p>
                </div>
                <div className="col">
                  <p>{element.deadline}</p>
                </div>
                <div className="col">
                  <button className="btn btn-outline-danger" onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </center>
  );
}

export default App;
