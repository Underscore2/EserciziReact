import React from "react";

class Container extends React.Component {

    state = {
        list: ['Amadeus', 'Cipolla']
    }

    deleteHandler = (item) => {
        const array = this.state.list.filter((items) => items != item);
        this.setState({
            list: this.state.list = array
        })
    }

    render() {


        return (
            <div>{this.props.children(this.state.list, this.deleteHandler)}</div>
        )
    }
}

export default Container;