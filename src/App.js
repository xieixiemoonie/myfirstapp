import React,{Component} from 'react';

import './App.css';
import  tasks from './samples/tasks.json'


import Tareas from './components/Tareas.js'
import TaskForm from './components/TaskForm.js'
import Posts from './components/Posts.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
class App  extends Component{

  state = {
    tasks : tasks
  }

  addTask = (title, description) =>{
    const newTask = {
      title: title,
      descriptiom: description,
      id : this.state.tasks.length
    }
    
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }


  deleteTask = (id) => {
 const newTasks = this.state.tasks.filter(task => task.id !== id)
 this.setState({tasks: newTasks})
  }

  checkDone = id  =>{
    const newTasks = this.state.tasks.map(task =>{
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    });

    this.setState({tasks: newTasks})
  }

render(){

  return(
    <div>
      <Router>
        <Link to ="/">Home</Link>
        <br></br>
        <Link to ="/posts">Post</Link>
        <br></br>
      <Route exact path = "/" render={() =>{
       return<div><TaskForm addTask = {this.addTask}/>
      <Tareas tasks = {this.state.tasks} 
      deleteTask = {this.deleteTask} 
      checkDone = {this.checkDone}/>
      </div>
      }}>
      </Route>
     
      <Route exact path = "/posts" component={Posts}>
</Route>
         
      </Router>
      
    
    </div>
  )
}
}

export default App;
