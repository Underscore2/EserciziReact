import React, { createRef } from 'react';

class Todolist extends React.Component {
    inpt = createRef
    state = {
        item: [
            'Cane', 'Gatto', 'Topo', 'Sara'
        ],
        addItems: ''
    }

    eventHandler = (event) => {

        this.setState((state) => {
            console.log(state.addItems)
            return { addItems: state.addItems = event.target.value }
        })
    }

    eventSaver = () => {
        this.setState((state) => {
            console.log(this.state.addItems)
            console.log(this.state.item)
            return { item: state.item.concat(this.state.addItems) }
        })
    }


    render() {
        return (
            <div>
                <ul>{this.state.item.map((item, index) => (<li key={index}>{item}</li>))}</ul>

                <input type="text" value={this.state.addItems} onChange={this.eventHandler} />
                <button onClick={this.eventSaver}>CAMBIA</button>
            </div>
        )
    }
}
export default Todolist