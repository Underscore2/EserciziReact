import React from "react";


export default class TodoList extends React.Component {

    list = {
        items: [],
    }

    buttonOnClick = (event) => {
        event.preventDefault()
        this.setState({
            items: [...this.state.items, event.target.elements.newItem.value],

        })

        event.target.reset()
    }
    deleteHandler = (item) => {
        const array = this.state.list.filter((items) => items != item);
        this.setState({
            list: this.state.list = array
        })
    }




    render() {

        return (
            <div>
                <form onSubmit={this.buttonOnClick}>
                    <input name="newItem" type="text" />
                    <button type="submit">Aggiungi </button>
                </form>
                {this.props.item(this.list.items, this.handleRemove)}
            </div>
        )
    }
}