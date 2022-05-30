import react from 'react';

class ClickCounter extends react.Component {

    state = {

        name: ''
    }

    handlerButtonIncrement = (event) => {
        console.log(event)
        this.setState((state) => {
            return { name: event.target.innerText }
        })

    }

    render() {
        return (
            <div>
                <h1> Ultimo bottone: {this.state.name}</h1>
                <button name="giorgio " onClick={this.handlerButtonIncrement}>AAAAAAAAA</button>
                <button name="giorgio2 " onClick={this.handlerButtonIncrement}>BBBBBBBBB</button>
                <button name="giorgio3 " onClick={this.handlerButtonIncrement}>CCCCCCCCC</button>

            </div>
        )
    }
}
export default ClickCounter