import React, { Component } from 'react';
class ToDoList extends Component{
    constructor(){
        super();
        this.state = {
            newItem: "",
            tasks: [],
        };
    }
    addItem = (event) => {
        event.preventDefault();
        if(!this.state.newItem) return;
        this.setState({tasks: [...this.state.tasks, {title: this.state.newItem, done: false}], newItem: ""});
        // this.setState({...this.state, });
    }
    removeItem = (id) => {
        let tasks2 = [...this.state.tasks];
        tasks2[id] = {...tasks2[id], done: !tasks2[id].done}
        this.setState({tasks: tasks2});
    }
    render(){
        console.log(this.state);
        return(
            <div id="screen">
                <h1>My List</h1>
                <p>{this.state.newItem}</p>
                <form onSubmit={this.addItem}>
                    <input id="myInput" value={this.state.newItem} type="text" onChange={(event) => {this.setState({newItem: event.target.value})}} />
                    <button type="submit">add</button>
                </form>
                <ul>
                    {
                        this.state.tasks.map((task, id) => (
                            <li key={id} onClick={() => {this.removeItem(id)}} style={{textDecoration: task.done ? "line-through" : ""}}>{task.title}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ToDoList;