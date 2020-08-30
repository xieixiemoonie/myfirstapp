import React,{Component} from 'react';
import './Tarea.css';
import propTypes from 'prop-types';


class Tarea extends Component{



    StyleCompleted() {
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'green': 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none' 
        }
    }
    




    render(){
      const {task} = this.props;
      const redColor = {background: 'red'};
        return  <p style = {this.StyleCompleted()}>
            {task.title} - {task.description} -{task.done} -{task.id}
            <input type = "checkbox" onChange = {this.props.checkDone.bind(this,task.id)} />
                <button style = {btnDelete} onClick = {this.props.deleteTask.bind(this, task.id)}>x</button>
        </p>
    }
}

Tarea.propTypes = {
    task: propTypes.object.isRequired
}

const btnDelete = {
   fontSize: '38px',
   background: '#ea20207',
   color: "#fff",
   border: 'none',
   padding: '10px 15px',
   borderRadius: '50%',
   cursor: 'pointer',

}


export default Tarea;

