import React from 'react'


class TodoList extends React.Component {

    state = {
        todos: ['Cane', 'Gatto', 'Topo', 'Sara'],
        value: ''
    }

    resetList = () => { this.setState({ todos: ['Cane', 'Gatto', 'Topo', 'Sara'] }) }
    inputSaver = (event) => this.setState({ value: event.target.value });
    dataPusher = () => {
        this.setState((state) => {

            return {
                todos: state.todos.concat(this.state.value),
                value: state.value = ''


            }
        })
    }

  /*   removeItem = (index) => {
        this.setState((state) => {
            const array = state.todos.splice(index,1)
            return{todos:state.todos}
   
        })
    } */

    removeItem = (todo) => {
        this.setState((state) => {
            const array = state.todos.filter((item)=>{return item !== todo})
            return {todos: state.todo= array}
   
        })
    }
    render() {
        return (
            <>
                <ul>
                    <h1>To do list</h1>
                    {this.state.todos.map((todo, index) => {
                        return (
                            <div>
                                <li name='li' key={index}>{todo}</li> <button key={index+'btn'} onClick={()=>{this.removeItem(todo)}}>Remove</button>
                            </div>


                        )
                    })}
                    <input type="text" name='inputin' value={this.state.value} onChange={this.inputSaver}></input>
                    <button onClick={this.dataPusher}>
                        Add
                    </button>
                    <button onClick={this.resetList}> Reset </button>
                </ul>
            </>
        )
    }
}

export default TodoList