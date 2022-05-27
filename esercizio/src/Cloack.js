import React from "react";
import CounterDisplay from "./CounterDisplay";


class Cloack extends React.Component {

    state = {
        cloack: this.props.cloack
    }
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { cloack: state.cloack + this.props.count }
            })
        }, this.props.interval)
    }


    render() {
        return <CounterDisplay cloack={this.state.cloack} />
    }

}

Cloack.defaultProps = {
    interval: 1000,
    count: 1,
    cloack: 1
}

export default Cloack;