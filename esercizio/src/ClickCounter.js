import react from 'react';

class ClickCounter extends react.Component {

    state = {

        count: 0
    }

    handlerButtonIncrement = () => {
        this.setState((state) => {
            return { count: state.count + 1 }
        })

    }

    render() {
        return (
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.handlerButtonIncrement}>AAAAAAAAA</button>
            </div>
        )
    }
}
export default ClickCounter