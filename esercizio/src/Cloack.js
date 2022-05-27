import React from "react";

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
        return <h1>Cloack: {this.state.cloack}</h1>
    }

}

Cloack.defaultProps = {
    interval: 1000,
    count: 1,
    cloack: 1
}

export default Cloack;