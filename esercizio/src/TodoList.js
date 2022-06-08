import React from 'react'


class TodoList extends React.Component {

    state = {
        todos: ['Cane', 'Gatto', 'Topo', 'Sara'],
        value: ''
    }

    inputSaver = (event) => this.setState({ value: event.target.value });
    dataPusher = (event) => {
        this.setState((state) => {
            
            return {
                todos: state.todos.concat(this.state.value),
                value: state.value=''
            
          
            }
        })
    }


    render() {
        return (
            <>
                <ul>
                    <h1>To do list</h1>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <li key={index}>{todo}</li>
                        )
                    })}
                    <input type="text" name='inputin' value={this.state.value}onChange={this.inputSaver}></input>
                    <button  onClick={this.dataPusher}>
                        Add
                    </button>
                </ul>
            </>
        )
    }
}

export default TodoList