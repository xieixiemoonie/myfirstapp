import React, {Component} from 'react';
import Tarea from'./Tarea.js';
import propTypes from 'prop-types';

class Tareas extends Component{
    render(){
        return this.props.tasks.map(task =>
             <Tarea
              task={task} 
              key={task.id} 
              deleteTask= {this.props.deleteTask}
              checkDone= {this.props.checkDone}/>);
    }
}

Tareas.propTypes = {
    tasks: propTypes.array.isRequired
}


export default Tareas;