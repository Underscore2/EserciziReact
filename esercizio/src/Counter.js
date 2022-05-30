import React from 'react';

class Counter extends React.Component {

    state = {
        count: 0
    }
    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return { count: this.state.count + 1 };
            })
        }, 1000)
    }


    render() {
        return (<h1> Counter: {this.state.count} </h1>)
    }
}

export default Counter