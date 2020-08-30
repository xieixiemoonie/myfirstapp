import React, {Component} from 'react';
import { render } from '@testing-library/react';

export default class TaskForm extends Component{
    
   state = {
       title: '',
       description: ''
   }


   onSubmit = e =>{
   this.props.addTask(this.state.title, this.state.description)
  
   e.preventDefault();
   }

     onChange = e =>{
        
         this.setState({
          [e.target.name] : e.target.value 

     })
   }

    render(){
      
        return(
    <form onSubmit={this.onSubmit}>
    <input name = "title" type = "text"  placeholder ="write a task" onChange ={this.onChange} value={this.state.title} />
    
    <br/>
    <br/>
    <textarea name ="description" placeholder = "" onChange ={this.onChange} value={this.state.description}/>
    <input type = "submit"/>
   
</form>

    )
}
}