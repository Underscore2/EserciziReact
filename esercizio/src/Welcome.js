import React from "react";
import Age from "./Age";




class Welcome extends React.Component {




    render() {
        return (
            <div>
                <p> Welcome  {this.props.name}</p>
                <Age age={this.props.age} />
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Rahul Bohvino",
    age: 155
}
export default Welcome;