import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <p> Welcome  {this.props.name}</p>
        )
    }
}

Welcome.defaultProps = {
    name: "Rahul Bohvino"
}
export default Welcome;