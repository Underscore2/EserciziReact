import React from "react";

class Cloack extends React.Component {

    state = {
        cloack: 0
    }
    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { cloack: state.cloack + 1 }
            })
        }, 1000)
    }


    render() {
        return <h1>Cloack: {this.state.cloack}</h1>
    }

}

export default Cloack;