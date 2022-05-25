import React from "react";
import Welcome from "./Welcome";
const TaggoStrongo = <strong>Giorginho</strong>
class App extends React.Component {

    render() {

        return (
            <div>
                <Welcome name={TaggoStrongo} age="1" />
            </div>
        )
    }
}



export default App